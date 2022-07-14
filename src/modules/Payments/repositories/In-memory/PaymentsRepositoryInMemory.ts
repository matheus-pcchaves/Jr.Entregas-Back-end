import { IPaymentsDTO } from "../../dtos/IPaymentsDTO";
import { Payment } from "../../entities/Payment";
import { IPaymentsRepository } from "../IPaymentsRepository";

class PaymentsRepositoryInMemory implements IPaymentsRepository {

    payments: Payment[] = []

    async create({name, format}: IPaymentsDTO): Promise<void> {
        const payment = new Payment()

        Object.assign(payment, ({
            name,
            format
        }))

        await this.payments.push(payment)
    }

    async findByName(name: string): Promise<Payment> {
        const payment = this.payments.find((payment) => payment.name === name)
        
        return payment
    }

    async list(): Promise<Payment[]> {
        const payments = this.payments

        return payments
    }
}

export { PaymentsRepositoryInMemory }