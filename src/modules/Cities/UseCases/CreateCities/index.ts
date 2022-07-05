import { CitiesRepository } from "../../repositories/implementations/CitiesRepository";
import { CreateCitiesController } from "./CreateCitiesController";
import { CreateCitiesUseCase } from "./CreateCitiesUseCase";

const citiesRepository = CitiesRepository.getInstance()
const createCitiesUseCase = new CreateCitiesUseCase(citiesRepository)
const createCitiesController = new CreateCitiesController(createCitiesUseCase)

export { createCitiesController }