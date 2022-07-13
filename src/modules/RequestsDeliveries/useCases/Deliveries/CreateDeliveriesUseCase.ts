import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";

import { Delivery } from "../../entities/Delivery"
import { IDeliveriesRepository } from "../../repositories/IDeliveriesRepository";

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
        private dateProvider: IDateProvider
    ){}

    async execute({ request_id, deliveryman_id, expected_finish_date }: IRequest): Promise<Delivery>{
        const minimumHours = 24

        const requestInProgress = await this.deliveriesRepository.findRequestInProgress(request_id)

        if(requestInProgress){
            throw new AppError('Request already in progress')
        }

        const deliverymanInProgress = await this.deliveriesRepository.findDeliverymanInProgress(deliveryman_id)

        if(deliverymanInProgress){
            throw new AppError('Incorrect register')
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

        return newDelivery
    }
}

export { CreateDeliveriesUseCase }