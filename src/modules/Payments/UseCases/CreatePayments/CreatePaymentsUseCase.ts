import { AppError } from "../../../../errors/AppError";
import { inject, injectable } from "tsyringe";
import { IPaymentsDTO } from "../../dtos/IPaymentsDTO";
import { IPaymentsRepository } from "../../repositories/IPaymentsRepository";

@injectable()
class CreatePaymentsUseCase {

    constructor(
        @inject("PaymentsRepository")
        private paymentsRepository: IPaymentsRepository
    ){}

    async execute({name, format}: IPaymentsDTO){
        const paymentName = await this.paymentsRepository.findByName(name)

        if(paymentName){
            throw new AppError('Payment already registered');            
        }

        await this.paymentsRepository.create({
            name,
            format
        })
    }
}

export { CreatePaymentsUseCase }