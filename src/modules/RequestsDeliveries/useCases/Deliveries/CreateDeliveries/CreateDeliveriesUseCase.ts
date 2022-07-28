import { AppError } from "@errors/AppError";
import { Delivery } from "@modules/RequestsDeliveries/entities/Delivery";
import { IDeliveriesRepository } from "@modules/RequestsDeliveries/repositories/IDeliveriesRepository";
import { IRequestsRepository } from "@modules/RequestsDeliveries/repositories/IRequestsRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { inject, injectable } from "tsyringe";

interface IRequest {
    request_id: string,
    deliveryman_id: string,
    expected_finish_date: Date          
}

@injectable()
class CreateDeliveriesUseCase {

    constructor(
        @inject("DeliveriesRepository")
        private deliveriesRepository: IDeliveriesRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider,
        @inject("RequestsRepository")
        private requestsRepository: IRequestsRepository
    ){}

    async execute({ request_id, deliveryman_id, expected_finish_date }: IRequest): Promise<Delivery>{
        const minimumHours = 24

        const requestAlreadyInProgress = await this.deliveriesRepository.findRequestInProgress(request_id)

        if(!requestAlreadyInProgress){
            throw new AppError('Request already in progress')
        }

        const deliverymanUnavailable = await this.deliveriesRepository.findDeliverymanAvailable(deliveryman_id)

        if(!deliverymanUnavailable){
            throw new AppError('Deliveryman is unavailable')
        }

        const dateNow = this.dateProvider.dateNow()

        const compare = this.dateProvider.compareInHours(
            dateNow,
            expected_finish_date,
        )

        if(compare < minimumHours){
            throw new AppError('Invalid return time')
        }

        const newDelivery = await this.deliveriesRepository.create({
            request_id,
            deliveryman_id,
            expected_finish_date
        })

        await this.requestsRepository.updateStatus(request_id, false)

        return newDelivery
    }
}

export { CreateDeliveriesUseCase }