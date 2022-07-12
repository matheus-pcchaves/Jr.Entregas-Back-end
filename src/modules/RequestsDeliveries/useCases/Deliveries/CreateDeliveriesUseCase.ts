import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

import { Delivery } from "@modules/RequestsDeliveries/entities/Delivery"
import { IDeliveriesRepository } from "@modules/RequestsDeliveries/repositories/IDeliveriesRepository";
import { IRequestsRepository } from "@modules/RequestsDeliveries/repositories/IRequestsRepository";
import { IDeliverymansRepository } from "@modules/Accounts/repositories/IDeliverymansRepository";

interface IRequest {
    request_id: string;
    city_id: string;
    deliveryman_id: string;
    expected_finish_date: Date
}

@injectable()
class CreateDeliveriesUseCase {

    constructor(
        @inject("DeliveriesRepository")
        private deliveriesRepository: IDeliveriesRepository,

        @inject("RequestsRepository")
        private requestsRepository: IRequestsRepository,

        @inject("DeliverymansRepository")
        private deliverymansRepository: IDeliverymansRepository,

        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ){}

    async execute({ request_id, city_id, deliveryman_id, expected_finish_date }: IRequest): Promise<Delivery>{
        const minimumHours = 24

        const requestInProgress = await this.deliveriesRepository.findRequestInProgress(request_id)

        if(requestInProgress){
            throw new AppError('Request already in progress')
        }

        const deliverymanInProgress = await this.deliveriesRepository.findDeliverymanInProgress(deliveryman_id)

        if(deliverymanInProgress){
            throw new AppError('Incorrect register')
        }

        const requestsCity = await this.requestsRepository.findByCity(city_id)

        if(!requestsCity){
            throw new AppError('Incorrect city')
        }

        const deliverymansCity = await this.deliverymansRepository.findByCity(city_id)

        if(!deliverymansCity){
            throw new AppError('Cannot deliver outside your city')
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
            city_id,
            deliveryman_id,
            expected_finish_date
        })

        return newDelivery
    }
}

export { CreateDeliveriesUseCase }