import { getRepository, Repository } from "typeorm";
import { IDeliveriesDTO } from "@modules/RequestsDeliveries/dtos/IDeliveriesDTO";
import { Delivery } from "@modules/RequestsDeliveries/entities/Delivery";
import { IDeliveriesRepository } from "../IDeliveriesRepository";

class DeliveriesRepository implements IDeliveriesRepository {

    private repository: Repository<Delivery>

    constructor(){
        this.repository = getRepository(Delivery)
    }

    async findRequestInProgress(request_id: string): Promise<Delivery> {
        const requestId = await this.repository.findOne({request_id})

        return requestId
    }

    async findDeliverymanInProgress(deliveryman_id: string): Promise<Delivery> {
        const deliverymanId = await this.repository.findOne({deliveryman_id})

        return deliverymanId
    }

    async create({ request_id, city_id, deliveryman_id, expected_finish_date}: IDeliveriesDTO): Promise<Delivery> {

        const delivery = await this.repository.create({
            request_id,
            city_id,
            deliveryman_id,
            expected_finish_date
        })

        await this.repository.save(delivery)

        return delivery
    }
}

export { DeliveriesRepository }