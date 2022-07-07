import { inject, injectable } from "tsyringe";
import { IRequestsDTO } from "../../dtos/IRequestsDTO";
import { IRequestsRepository } from "../../repositories/IRequestsRepository";

@injectable()
class CreateRequestUseCase {

    constructor(
        @inject("RequestsRepository")
        private createRequestUseCase: IRequestsRepository
    ){}

    async execute({ item_description, address, city_id, payment_id }: IRequestsDTO){

        
        
        await this.createRequestUseCase.create({
            item_description, 
            address, 
            city_id, 
            payment_id
        })
    }
}

export { CreateRequestUseCase }