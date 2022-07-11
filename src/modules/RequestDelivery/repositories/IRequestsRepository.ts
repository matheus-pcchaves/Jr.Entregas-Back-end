import { IRequestsDTO } from "../dtos/IRequestsDTO";
import { Requests } from "../entities/Requests";

class IRequestsRepository {
    create(data: IRequestsDTO): Promise<Requests>
    findById(id: string): Promise<Requests | null>
    findByCityId(city_id: string): Promise<Requests[]>
}

export { IRequestsRepository }