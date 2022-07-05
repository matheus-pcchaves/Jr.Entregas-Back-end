import { AppError } from "../../../../errors/AppError"
import { CitiesRepositoryInMemory } from "../../repositories/InMemory/CitiesRepositoryInMemory"
import { CreateCitiesUseCase } from "./CreateCitiesUseCase"

let citiesRepositoryInMemory: CitiesRepositoryInMemory
let createCitiesUseCase: CreateCitiesUseCase

describe("Create a new city register", () => {

    beforeEach(() => {
        citiesRepositoryInMemory = new CitiesRepositoryInMemory()
        createCitiesUseCase = new CreateCitiesUseCase(citiesRepositoryInMemory)
    })

    it("Shoul be able to create a new city register", async () => {
        const city = {
            name: "Ribeirão Preto"
        } 

        await createCitiesUseCase.execute({
            name: city.name
        })

        const cityCreated = await citiesRepositoryInMemory.findByName(city.name)

        expect(cityCreated).toHaveProperty("id")
    })

    it("Shoul not be able to create a new city register", async () => {
        expect(async () => {
            const city = {
                name: "Ribeirão Preto"
            } 
    
            await createCitiesUseCase.execute({
                name: city.name
            })

            await createCitiesUseCase.execute({
                name: city.name
            })
        }).rejects.toBeInstanceOf(AppError)
    })
})