import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../../errors/AppError";
import { IDateProvider } from "../../../../../shared/container/providers/DateProvider/IDateProvider";

import { Delivery } from "../../../entities/Delivery"
import { IDeliveriesRepository } from "../../../repositories/IDeliveriesRepository";
import { IRequestsRepository } from "../../../repositories/IRequestsRepository";

interface IRequest {
    request_id: string;
    deliveryman_id: string;
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

        const requestInProgress = await this.deliveriesRepository.findRequestInProgress(request_id)

        if(requestInProgress){
            throw new AppError('Request already in progress')
        }

        const deliverymanAvailable = await this.deliveriesRepository.findDeliverymanAvailable(deliveryman_id)

        if(deliverymanAvailable){
            throw new AppError('Deliveryman unavailable')
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