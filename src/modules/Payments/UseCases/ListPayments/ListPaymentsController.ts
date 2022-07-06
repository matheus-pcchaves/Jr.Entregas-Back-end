import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListPaymentsUseCase } from "./ListPaymentsUseCase"

class ListPaymentsController {

    async handle(request: Request, response: Response): Promise<Response>{

        const listPaymentsUseCase = container.resolve(ListPaymentsUseCase)

        const all = await listPaymentsUseCase.execute()

        return response.json(all)
    }
}

export { ListPaymentsController }