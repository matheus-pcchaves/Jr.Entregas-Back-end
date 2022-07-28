import { IDeliveriesDTO } from "../dtos/IDeliveriesDTO";
import { Delivery } from "../entities/Delivery";

interface IDeliveriesRepository {
    findRequestInProgress(request_id: string): Promise<Delivery>
    findDeliverymanAvailable(deliveryman_id: string): Promise<Delivery>
    findByDeliveryman(deliveryman_id: string): Promise<Delivery[]>
    findById(id: string): Promise<Delivery>
    create(data: IDeliveriesDTO): Promise<Delivery>
}

export { IDeliveriesRepository }