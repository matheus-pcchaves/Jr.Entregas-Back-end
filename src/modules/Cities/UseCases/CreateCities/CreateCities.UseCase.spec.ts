import { AppError } from "@errors/AppError"
import { CitiesRepositoryInMemory } from "../../repositories/InMemory/CitiesRepositoryInMemory"
import { CreateCitiesUseCase } from "./CreateCitiesUseCase"

let citiesRepository: CitiesRepositoryInMemory
let createCitiesUseCase: CreateCitiesUseCase

describe("Create a new city", () => {
    beforeEach(() => {
        citiesRepository = new CitiesRepositoryInMemory()
        createCitiesUseCase = new CreateCitiesUseCase(citiesRepository)
    })

    it("Should be able to create a new city", async() => {
        const city = {
            name: "City Test",
            state: "State Test"
        }

        await createCitiesUseCase.execute({
            name: city.name,
            state: city.state
        })

        const cityCreated = await citiesRepository.findByName(city.name)

        expect(cityCreated).toHaveProperty("id")
    })

    it("Should not be able to create if name already exists", async() => {
        expect(async () => {
            const city = {
                name: "City Test",
                state: "State Test"
            }
    
            await createCitiesUseCase.execute({
                name: city.name,
                state: city.state
            })
    
            await createCitiesUseCase.execute({
                name: city.name,
                state: city.state
            })
        }).rejects.toBeInstanceOf(AppError)
    })
})