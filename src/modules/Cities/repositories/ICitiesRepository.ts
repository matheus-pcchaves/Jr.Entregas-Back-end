import { City} from "../entities/City"

interface ICitiesDTO {
    name: string;
    state: string
}

interface ICitiesRepository {
    create(name: ICitiesDTO): Promise<void>
    list(): Promise<City[]>
    findByName(name: string): Promise<City>
    findById(id: string): Promise<City| null>
}

export { ICitiesDTO, ICitiesRepository }