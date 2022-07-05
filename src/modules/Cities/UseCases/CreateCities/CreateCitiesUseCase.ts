import { inject, injectable} from "tsyringe"
import { AppError } from "../../../../errors/AppError";
import { ICitiesDTO, ICitiesRepository } from "../../repositories/ICitiesRepository";


@injectable()
class CreateCitiesUseCase {

    constructor(
        @inject("CitiesRepository")
        private citiesRepository: ICitiesRepository
    ){}

    async execute({name, state}: ICitiesDTO): Promise<void>{

        const cityAlreadyExists = await this.citiesRepository.findByName(name)

        if(cityAlreadyExists){
            throw new AppError('City already exists')
        }

        await this.citiesRepository.create({
            name,
            state
        })
    }    
}

export { CreateCitiesUseCase }