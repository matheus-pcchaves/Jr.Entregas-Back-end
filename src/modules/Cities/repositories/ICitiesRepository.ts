import { Cidade } from "../models/Cidade"

interface ICitiesDTO {
    name: string;
    state: string
}

interface ICitiesRepository {
    create(name: ICitiesDTO): void
    list(): Cidade []
    findByName(name: string): Cidade
    findById(id: string): Promise<Cidade | null>
}

export { ICitiesDTO, ICitiesRepository }