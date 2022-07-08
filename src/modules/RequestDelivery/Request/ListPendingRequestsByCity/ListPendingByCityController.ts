import { Request, Response } from "express"
import { container } from "tsyringe";
import { ListPendingByCityUseCase } from "./ListPendingByCityUseCase";


class ListPendingByCityController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { city_id } = request.query

        const listPendingByCity = container.resolve(ListPendingByCityUseCase)

        const requests = await listPendingByCity.execute({city_id})

        return response.json(requests)
    }
}

export { ListPendingByCityController }