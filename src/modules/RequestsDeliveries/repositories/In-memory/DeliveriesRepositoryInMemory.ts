import { IDeliveriesDTO } from "@modules/RequestsDeliveries/dtos/IDeliveriesDTO";
import { Delivery } from "@modules/RequestsDeliveries/entities/Delivery";
import { IDeliveriesRepository } from "../IDeliveriesRepository";

class DeliveriesRepositoryInMemory implements IDeliveriesRepository {

    deliveries: Delivery[] = []

    async findRequestInProgress(request_id: string): Promise<Delivery> {
        return this.deliveries.find((delivery) => delivery.request_id === request_id && !delivery.end_date)
    }

    async findDeliverymanAvailable(deliveryman_id: string): Promise<Delivery> {
        return this.deliveries.find((delivery) => delivery.deliveryman_id === deliveryman_id && !delivery.end_date)
    }

    async findByDeliveryman(deliveryman_id: string): Promise<Delivery[]> {
        const deliveryman = await this.deliveries.filter((delivery) => delivery.deliveryman_id === deliveryman_id)

        return deliveryman
    }

    async findById(id: string): Promise<Delivery> {
        const delivery = await this.deliveries.find((delivery) => delivery.id === id)

        return delivery
    }

    async create({
        request_id,
        deliveryman_id,
        expected_finish_date,
        id,
        end_date,
        total        
    }: IDeliveriesDTO): Promise<Delivery> {
        const delivery = new Delivery()

        Object.assign(delivery, ({
            request_id,
            deliveryman_id,
            expected_finish_date,
            id,
            end_date,
            total
        }))

        await this.deliveries.push(delivery)

        return delivery
    }
}

export { DeliveriesRepositoryInMemory }