import { Request, Response } from "express"
import { container } from "tsyringe"
import { FinishDeliveriesUseCase } from "./FinishDeliveriesUseCase"

class FinishDeliveriesController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id: deliveryman_id } = request.user
        const { id } = request.params

        const finishDeliveriesUseCase = container.resolve(FinishDeliveriesUseCase)

        const delivery = await finishDeliveriesUseCase.execute({
            id,
            deliveryman_id: id
        })

        return response.status(200).json(delivery)
    }
}

export { FinishDeliveriesController }