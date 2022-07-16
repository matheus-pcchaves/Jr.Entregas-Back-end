import { IDeliveriesDTO } from "../dtos/IDeliveriesDTO";
import { Delivery } from "../entities/Delivery";

class IDeliveriesRepository {
    findRequestInProgress(request_id: string): Promise<Delivery>
    findDeliverymanAvailable(deliveryman_id: string): Promise<Delivery>
    create(data: IDeliveriesDTO): Promise<Delivery>
}

export { IDeliveriesRepository }