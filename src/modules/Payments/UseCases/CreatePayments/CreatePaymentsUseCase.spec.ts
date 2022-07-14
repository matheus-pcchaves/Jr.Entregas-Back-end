import { AppError } from "../../../../errors/AppError"
import { PaymentsRepositoryInMemory } from "../../repositories/In-memory/PaymentsRepositoryInMemory"
import { CreatePaymentsUseCase } from "./CreatePaymentsUseCase"

let paymentsRepository: PaymentsRepositoryInMemory
let createPaymentsUseCase: CreatePaymentsUseCase

describe("Create a new payment", () => {
    beforeEach(() => {
        paymentsRepository = new PaymentsRepositoryInMemory()
        createPaymentsUseCase = new CreatePaymentsUseCase(paymentsRepository)
    })

    it("Should be able to create a new payment", async() => {
        const payment = {
            name: "Payment Test",
            format: "Format Test"
        }

        await createPaymentsUseCase.execute({
            name: payment.name,
            format: payment.format
        })

        const paymentCreated = await paymentsRepository.findByName(payment.name)

        expect(paymentCreated).toHaveProperty("id")
    })

    it("Should not be able to create if name already exists", async() => {
        expect(async () => {
            const payment = {
                name: "Payment Test",
                format: "format Test"
            }
    
            await createPaymentsUseCase.execute({
                name: payment.name,
                format: payment.format
            })
    
            await createPaymentsUseCase.execute({
                name: payment.name,
                format: payment.format
            })
        }).rejects.toBeInstanceOf(AppError)
    })
})