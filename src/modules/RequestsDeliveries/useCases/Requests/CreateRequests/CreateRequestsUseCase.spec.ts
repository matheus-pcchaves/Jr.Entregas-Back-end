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
        const request = {
            item_description: "Item description test",
            address: "Fake address test",
            city_id: "12345",
            payment_id: "54321"
        }

        await createRequestUseCase.execute({
            item_description: request.item_description,
            address: request.address,
            city_id: request.city_id,
            payment_id: request.payment_id
        })

        await requestsRepositoryInMemory.findByCity(request.city_id)

        expect(request).toHaveProperty("id")
    })
})