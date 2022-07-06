import { getRepository, Repository } from "typeorm";
import { Payment } from "../../entities/Payment";
import { IPaymentsRepository } from "../IPaymentsRepository";
import { IPaymentsDTO } from "../../dtos/IPaymentsDTO"

class PaymentsRepository implements IPaymentsRepository{

    private repository: Repository<Payment>

    public constructor(){
        this.repository = getRepository(Payment)
    }

    async create({name, format}: IPaymentsDTO): Promise<void> {

        const payment = this.repository.create({
            name,
            format
        })

        await this.repository.save(payment)
    }

    async findByName(name: string): Promise<Payment> {
        const payment = await this.repository.findOne({name})

        return payment
    }

    async findById(id: string): Promise<Payment> {
        const payment = await this.repository.findOne({id})

        return payment
    }

    async list(): Promise<Payment[]> {
        const all = await this.repository.find()

        return all
    }
}

export { PaymentsRepository }