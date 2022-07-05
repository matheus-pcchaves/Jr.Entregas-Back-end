import { AppError } from "../../../../errors/AppError";
import { ICitiesDTO, ICitiesRepository } from "../../repositories/ICitiesRepository";

class CreateCitiesUseCase {

    constructor(
        private citiesRepository: ICitiesRepository
    ){}

    execute({name, state}: ICitiesDTO): void{

        const cityAlreadyExists = this.citiesRepository.findByName(name)

        if(cityAlreadyExists){
            throw new AppError('City already exists')
        }

        this.citiesRepository.create({
            name,
            state
        })
    }    
}

export { CreateCitiesUseCase }