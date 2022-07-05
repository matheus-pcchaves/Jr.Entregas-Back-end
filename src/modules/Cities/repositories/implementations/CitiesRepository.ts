import { getRepository, Repository } from "typeorm";
import { City } from "../../entities/City";
import { ICitiesDTO, ICitiesRepository } from "../ICitiesRepository";

class CitiesRepository implements ICitiesRepository{

    private repository: Repository<City>

    public constructor(){
        this.repository = getRepository(City)
    }

    async create({name, state}: ICitiesDTO): Promise<void> {

        const city = this.repository.create({
            name,
            state
        })

        await this.repository.save(city)
    }

    async list(): Promise<City[]> {
        const cities = this.repository.find()

        return cities
    }

    async findByName(name: string): Promise<City> {
        const city = this.repository.findOne({name})

        return city
    }

    async findById(id: string): Promise<City> {
        const city = this.repository.findOne({id})

        return city
    }
}

export { CitiesRepository }