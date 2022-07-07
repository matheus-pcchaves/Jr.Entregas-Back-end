import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateRequestUseCase } from "./CreateRequestUseCase"

class CreateRequestsController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { item_description, address, city_id, payment_id } = request.body

        const createRequestUseCase = container.resolve(CreateRequestUseCase)

        const newRequest = await createRequestUseCase.execute({
            item_description, 
            address, 
            city_id, 
            payment_id
        })

        return response.json(newRequest)
    }
}

export { CreateRequestsController }