import { IRequestsRepository } from "@modules/RequestDelivery/repositories/IRequestsRepository";
import { inject } from "tsyringe";

class ListRequestsByCity {

    constructor(
        private requestsRepository: IRequestsRepository
    ){}

    async execute(city_id: string){
        const cityMatch = await this.requestsRepository.find
    }
}

export { ListRequestsByCity }