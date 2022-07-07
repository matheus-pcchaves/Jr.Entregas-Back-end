import { getRepository, Repository } from "typeorm";
import { Requests } from "../../entities/Requests";
import { IRequestsRepository } from "../IRequestsRepository";
import { IRequestsDTO } from "../../dtos/IRequestsDTO";

class RequestsRepository implements IRequestsRepository {

    private repository: Repository<Requests>

    public constructor(){
        this.repository = getRepository(Requests)
    } 

    async create({item_description, address, city_id, payment_id}: IRequestsDTO): Promise<void> {

        const request = this.repository.create({
            item_description,
            address,
            city_id,
            payment_id
        })

        await this.repository.save(request)
    }

    async findById(id: string): Promise<Requests> {
        const requestId = await this.repository.findOne({id})

        return requestId
    }

    async findByCityId(city_id: string): Promise<Requests[]> {
        const requestsCity = await this.repository.find({
            where: {
                city_id
            },
            relations: ["city"]
        })

        return requestsCity
    }
}

export { RequestsRepository }