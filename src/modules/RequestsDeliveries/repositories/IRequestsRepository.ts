import { IRequestsDTO } from "../dtos/IRequestsDTO";
import { Requests } from "../entities/Requests";

class IRequestsRepository {
    create(data: IRequestsDTO): Promise<Requests>
    listByCityId(city_id?: string): Promise<Requests[]>
    updateStatus(id: string, isPending: boolean): Promise<void>
}

export { IRequestsRepository }