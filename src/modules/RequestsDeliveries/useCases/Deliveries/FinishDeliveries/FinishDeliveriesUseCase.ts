import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppError";

import { IDeliveriesRepository } from "../../../repositories/IDeliveriesRepository";
import { IDateProvider } from "../../../../../shared/container/providers/DateProvider/IDateProvider";
import { Delivery } from "../../../entities/Delivery";

interface IRequest {
    id: string;
    deliveryman_id: string
}

@injectable()
class FinishDeliveriesUseCase {

    constructor(
        @inject("DeliveriesRepository")
        private deliveriesRepository: IDeliveriesRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ){}

    async execute({ id, deliveryman_id }: IRequest): Promise<Delivery>{
        const delivery = await this.deliveriesRepository.findById(id)
        const minimum_rate = 50

        if(!delivery){
            throw new AppError('Delivery does not exists')
        }

        const deliverymanExists = await this.deliveriesRepository.findDeliverymanAvailable(deliveryman_id)

        if(!deliverymanExists){
            throw new AppError('Incorrect deliveryman')
        }

        let total = 0

        const dateNow = this.dateProvider.dateNow()

        const delayDays = this.dateProvider.compareInDays(dateNow, delivery.expected_finish_date)

        total += delayDays - minimum_rate

        delivery.end_date = this.dateProvider.dateNow()
        delivery.total = total

        await this.deliveriesRepository.create(delivery)

        return delivery
    }
}

export { FinishDeliveriesUseCase }