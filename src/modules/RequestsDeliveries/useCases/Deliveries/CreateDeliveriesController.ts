import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateDeliveriesUseCase } from "./CreateDeliveriesUseCase"

class CreateDeliveriesController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { request_id, expected_finish_date } = request.body
        const { id } = request.user

        const createDeliveryUseCase = container.resolve(CreateDeliveriesUseCase)

        const delivery = await createDeliveryUseCase.execute({
            request_id,
            deliveryman_id: id,
            expected_finish_date
        })

        return response.status(201).json(delivery)
    }
}

export { CreateDeliveriesController }