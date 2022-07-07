import { IRequestsDTO } from "../dtos/IRequestsDTO";
import { Requests } from "../entities/Requests";

class IRequestsRepository {
    create(data: IRequestsDTO): Promise<void>
    findById(id: string): Promise<Requests | null>
}

export { IRequestsRepository }