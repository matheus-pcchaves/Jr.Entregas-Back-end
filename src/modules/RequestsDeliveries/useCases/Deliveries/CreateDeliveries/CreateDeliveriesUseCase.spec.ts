import { CreateDeliveriesUseCase } from "./CreateDeliveriesUseCase"

let createDeliveriesUseCase: CreateDeliveriesUseCase

describe("Create a new delivery", () => {
    beforeEach(() => {
        createDeliveriesUseCase = new CreateDeliveriesUseCase()
    })

    it("Should be able to create a new delivery", async () => {
        await createDeliveriesUseCase.execute()
    })
})