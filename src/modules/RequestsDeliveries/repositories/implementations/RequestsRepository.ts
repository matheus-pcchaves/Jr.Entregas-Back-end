import { getRepository, Repository } from "typeorm";
import { Requests } from "../../entities/Requests";
import { IRequestsRepository } from "../IRequestsRepository";
import { IRequestsDTO } from "../../dtos/IRequestsDTO";

class RequestsRepository implements IRequestsRepository {

    private repository: Repository<Requests>

    public constructor(){
        this.repository = getRepository(Requests)
    } 
    
    async create({item_description, address, city_id, payment_id }: IRequestsDTO): Promise<Requests> {

        const request = await this.repository.create({
            item_description,
            address,
            city_id,
            payment_id
        })

        await this.repository.save(request)

        return request
    }
    
    async listByCityId(): Promise<Requests[]> {
        const requestsQuery = await this.repository
        .createQueryBuilder("r")
        .where("isPending = :isPending", {isPending: true})

        const requests = await requestsQuery.getMany()
        return requests
    }

    async findByCity(city_id: string): Promise<Requests> {
        const requestCity = await this.repository.findOne({city_id})

        return requestCity
    }

    async updateStatus(id: string, isPending: boolean): Promise<void> {
        await this.repository
        .createQueryBuilder()
        .update()
        .set({isPending})
        .where("id = :id")
        .setParameters({id})
        .execute()
    }
}

export { RequestsRepository }