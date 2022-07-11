import { inject, injectable } from "tsyringe";
import { IRequestsRepository } from "../../repositories/IRequestsRepository";
import { Requests } from "../../entities/Requests";

interface IRequest{
    city_id: string
}

@injectable()
class ListPendingByCityUseCase {

    constructor(
        @inject("RequestsRepository")
        private requestsRepository: IRequestsRepository
    ){}

    async execute({city_id}: IRequest): Promise<Requests[]>{

        const requests = await this.requestsRepository.listByCityId(city_id)

        return requests
    }
}

export { ListPendingByCityUseCase }