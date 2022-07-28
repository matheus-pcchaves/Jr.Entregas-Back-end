import { AppError } from "@errors/AppError"
import { DeliveriesRepositoryInMemory } from "@modules/RequestsDeliveries/repositories/In-memory/DeliveriesRepositoryInMemory"
import { RequestsRepositoryInMemory } from "@modules/RequestsDeliveries/repositories/In-memory/RequestsRepositoryInMemory"
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider"
import dayjs from "dayjs"
import { CreateDeliveriesUseCase } from "./CreateDeliveriesUseCase"

let createDeliveriesUseCase: CreateDeliveriesUseCase
let deliveriesRepositoryInMemory: DeliveriesRepositoryInMemory
let dayjsDateProvider: DayjsDateProvider
let requestsRepository: RequestsRepositoryInMemory

describe("Create a new delivery", () => {
    const dayAdd24Hours = dayjs().add(1, "day").toDate()

    beforeEach(() => {
        deliveriesRepositoryInMemory = new DeliveriesRepositoryInMemory()
        dayjsDateProvider = new DayjsDateProvider()
        requestsRepository = new RequestsRepositoryInMemory()
        createDeliveriesUseCase = new CreateDeliveriesUseCase(deliveriesRepositoryInMemory, dayjsDateProvider, requestsRepository)
    })

    it("Should be able to create a new delivery", async () => {
        const request = await requestsRepository.create({
            item_description: "Test",
            address: "Test address",
            city_id: "12345",
            payment_id: "54321"
        })

        const delivery = await deliveriesRepositoryInMemory.create({
            request_id: request.id,
            deliveryman_id: "deliveryman_id_test",
            expected_finish_date: dayAdd24Hours
        })

        expect(delivery).toHaveProperty("id")
    })

    it("Should not be able to create a new delivery if delivery is already in progress", async () => {
        await deliveriesRepositoryInMemory.create({
            request_id: "4567",
            deliveryman_id: "1234",
            expected_finish_date: dayAdd24Hours
        })

        await expect(createDeliveriesUseCase.execute({
            request_id: "4567",
            deliveryman_id: "4321",
            expected_finish_date: dayAdd24Hours
        })
        ).rejects.toBeInstanceOf(AppError)
    })

    it("Should not be able to create a new delivery if deliveryman is not available", async () => {
        await deliveriesRepositoryInMemory.create({
            request_id: "4567",
            deliveryman_id: "1234",
            expected_finish_date: dayAdd24Hours
        })

        await expect(createDeliveriesUseCase.execute({
            request_id: "7654",
            deliveryman_id: "1234",
            expected_finish_date: dayAdd24Hours
        })
        ).rejects.toBeInstanceOf(AppError)
    })
})