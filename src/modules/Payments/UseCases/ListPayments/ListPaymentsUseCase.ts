import { IPaymentsRepository } from "../../repositories/IPaymentsRepository"
import { inject, injectable } from "tsyringe"

@injectable()
class ListPaymentsUseCase {

    constructor(
        @inject("PaymentsRepository")
        private paymentsRepository: IPaymentsRepository
    ){}

    async execute(){
        const payments = this.paymentsRepository.list()

        return payments
    }
}

export { ListPaymentsUseCase }