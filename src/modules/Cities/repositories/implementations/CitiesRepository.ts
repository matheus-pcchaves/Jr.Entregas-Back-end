import { Cidade } from "../../models/Cidade";
import { ICitiesDTO, ICitiesRepository } from "../ICitiesRepository";

class CitiesRepository implements ICitiesRepository{
    private cidades: Cidade []

    public static INSTANCE: CitiesRepository

    public constructor(){
        this.cidades = []
    }

    public static getInstance(): CitiesRepository{
        if(!CitiesRepository.INSTANCE){
            CitiesRepository.INSTANCE = new CitiesRepository()
        }

        return CitiesRepository.INSTANCE
    }

    create({name, state}: ICitiesDTO): void {
        const cidade = new Cidade()

        Object.assign(cidade, {
            name,
            state
        })

        this.cidades.push(cidade)
    }

    list(): Cidade[] {
        return this.cidades
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

export { CitiesRepository }