import { IRequestsDTO } from "@modules/RequestsDeliveries/dtos/IRequestsDTO";
import { Requests } from "@modules/RequestsDeliveries/entities/Requests";
import { IRequestsRepository } from "../IRequestsRepository";

class RequestsRepositoryInMemory implements IRequestsRepository{
    
    requests: Requests[] = []

    async create({item_description, address, city_id, payment_id}: IRequestsDTO): Promise<Requests> {
        const request = new Requests()

        Object.assign(request, ({
            item_description,
            address,
            city_id,
            payment_id
        }))

        await this.requests.push(request)

        return request
    }

    async listByCityId(city_id: string): Promise<Requests[]> {
        const cities = city_id

        return this.requests.filter(cities[city_id])
    }

    async findByCity(city_id: string): Promise<Requests> {
        const cities = await this.requests.find((cities) => cities.city_id === city_id) 

        return cities
    }

    async updateStatus(id: string, isPending: boolean): Promise<void> {
        const status = await this.requests.findIndex(request => request.id === id)
        this.requests[status].isPending = isPending

    }
}

export { RequestsRepositoryInMemory }