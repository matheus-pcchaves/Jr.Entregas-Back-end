import { City } from "../../entities/City";
import { ICitiesDTO, ICitiesRepository } from "../ICitiesRepository";

class CitiesRepositoryInMemory implements ICitiesRepository {

    cidades: City [] = []

    async create({name, state}: ICitiesDTO): Promise<void> {
        const cidade = new City()

        Object.assign(cidade, ({name, state}))

        this.cidades.push(cidade)
    }

    async list(): Promise<City[]> {
        const cidades = this.cidades

        return cidades
    }

    async findByName(name: string): Promise<City> {
        const cidade = this.cidades.find((cidade) => cidade.name === name)
        
        return cidade
    }

    async findById(id: string): Promise<City> {
        const cidade = await this.cidades.find((cidade) => cidade.id === id)

        return cidade
    }
}

export { CitiesRepositoryInMemory }