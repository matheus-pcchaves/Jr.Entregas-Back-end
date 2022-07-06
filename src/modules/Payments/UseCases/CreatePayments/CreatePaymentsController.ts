import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreatePaymentsUseCase } from "./CreatePaymentsUseCase"

class CreatePaymentsController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, format } = request.body

        const createPaymentsUseCase = container.resolve(CreatePaymentsUseCase)

        await createPaymentsUseCase.execute({
            name,
            format
        })

        return response.status(201).send()
    }
}

export { CreatePaymentsController }