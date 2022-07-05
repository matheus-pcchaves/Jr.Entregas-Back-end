import { Cidade } from "../../models/Cidade";
import { ICitiesRepository } from "../../repositories/ICitiesRepository";

class ListCitiesUseCase {

    constructor(
        private citiesRepository: ICitiesRepository
    ){}

    execute(): Cidade[] {
        const cities = this.citiesRepository.list()

        return cities
    }
}

export { ListCitiesUseCase }