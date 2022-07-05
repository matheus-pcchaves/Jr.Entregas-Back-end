import { Cidade } from "../../models/Cidade";
import { ICitiesDTO, ICitiesRepository } from "../ICitiesRepository";

class CitiesRepositoryInMemory implements ICitiesRepository {

    cidades: Cidade [] = []

    create(name: ICitiesDTO): void {
        const cidade = new Cidade()

        Object.assign(cidade, ({name}))

        this.cidades.push(cidade)
    }

    list(): Cidade[] {
        const cidades = this.cidades

        return cidades
    }

    findByName(name: string): Cidade {
        const cidade = this.cidades.find((cidade) => cidade.name === name)
        
        return cidade
    }

    async findById(id: string): Promise<Cidade> {
        const cidade = await this.cidades.find((cidade) => cidade.id === id)

        return cidade
    }
}

export { CitiesRepositoryInMemory }