import { IRequestsDTO } from "@modules/RequestsDeliveries/dtos/IRequestsDTO"
import { RequestsRepositoryInMemory } from "@modules/RequestsDeliveries/repositories/In-memory/RequestsRepositoryInMemory"
import { CreateRequestUseCase } from "./CreateRequestUseCase"

let requestsRepositoryInMemory: RequestsRepositoryInMemory 
let createRequestUseCase: CreateRequestUseCase

describe("Create a new request", () => {
    beforeEach(() => {
        requestsRepositoryInMemory = new RequestsRepositoryInMemory()
        createRequestUseCase = new CreateRequestUseCase(requestsRepositoryInMemory) 
    })

    it("Should be able to create a new request", async () => {
        const request = await createRequestUseCase.execute({
            item_description: "Item description test",
            address: "Fake address test",
            city_id: "12345",
            payment_id: "54321"
        })

        expect(request).toHaveProperty("id")
    })
})