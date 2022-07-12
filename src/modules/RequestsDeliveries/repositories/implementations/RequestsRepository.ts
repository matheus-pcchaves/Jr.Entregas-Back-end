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

        const request = this.repository.create({
            item_description,
            address,
            city_id,
            payment_id
        })

        await this.repository.save(request)

        return request
    }

    async findById(id: string): Promise<Requests> {
        const requestId = await this.repository.findOne({id})

        return requestId
    }
    
    async listByCityId(cityId: string): Promise<Requests[]> {
        const requestsQuery = await this.repository.find({
            where: {
                city_id: cityId
            }
        })

        return requestsQuery
    }

    async findByCity(city_id: string): Promise<Requests> {
        const requestCity = await this.repository.findOne({city_id})

        return requestCity
    }
}

export { RequestsRepository }