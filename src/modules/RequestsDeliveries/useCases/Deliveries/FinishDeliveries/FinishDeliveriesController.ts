export { Request, Response } from "express"
import { container } from "tsyringe"

import { FinishDeliveriesUseCase } from "./FinishDeliveriesUseCase"

class FinishDeliveriesController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params
        const { id: deliveryman_id } = request.user

        const finishDeliveriesUseCase = container.resolve(FinishDeliveriesUseCase)

        const finishedDelivery = await finishDeliveriesUseCase.execute({id, deliveryman_id: id})

        return response.json(finishedDelivery)
    }
}

export { FinishDeliveriesController }