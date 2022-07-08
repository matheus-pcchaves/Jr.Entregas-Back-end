import { inject, injectable } from "tsyringe";
import { IRequestsRepository } from "../../repositories/IRequestsRepository";
import { Requests } from "../../entities/Requests";

@injectable()
class ListPendingByCityUseCase {

    constructor(
        @inject("RequestsRepository")
        private requestsRepository: IRequestsRepository
    ){}

    async execute({city_id}): Promise<Requests[]>{

        const requests = await this.requestsRepository.listPendingByCityId(city_id)

        return requests
    }
}

export { ListPendingByCityUseCase }