import { inject, injectable } from "tsyringe";
import { IRequestsDTO } from "../../../dtos/IRequestsDTO";
import { IRequestsRepository } from "../../../repositories/IRequestsRepository";
import { Requests } from "../../../entities/Requests";

@injectable()
class CreateRequestUseCase {

    constructor(
        @inject("RequestsRepository")
        private createRequestUseCase: IRequestsRepository
    ){}

    async execute({ item_description, address, city_id, payment_id }: IRequestsDTO): Promise<Requests>{
        
        const newRequest = await this.createRequestUseCase.create({
            item_description, 
            address, 
            city_id, 
            payment_id
        })

        return newRequest
    }
}

export { CreateRequestUseCase }