import { inject, injectable } from "tsyringe";
import { IRequestsRepository } from "../../repositories/IRequestsRepository";
import { Requests } from "../../entities/Requests";

@injectable()
class ListRequestsByCityUseCase {

    constructor(
        @inject("RequestsRepository")
        private requestsRepository: IRequestsRepository
    ){}

    async execute({city_id}): Promise<Requests[]>{

        const requests = await this.requestsRepository.findByCityId(city_id)

        return requests
    }
}

export { ListRequestsByCityUseCase }