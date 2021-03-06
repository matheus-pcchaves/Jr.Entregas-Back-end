import { IPaymentsDTO } from "../dtos/IPaymentsDTO";
import { Payment } from "../entities/Payment";

class IPaymentsRepository {
    create(data: IPaymentsDTO): Promise<void>
    findByName(name: string): Promise<Payment>
    list(): Promise<Payment[]>
}

export { IPaymentsRepository }