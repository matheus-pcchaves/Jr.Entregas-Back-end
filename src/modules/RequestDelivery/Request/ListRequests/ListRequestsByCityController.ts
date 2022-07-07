import { Request, Response } from "express"
import { container } from "tsyringe";
import { ListRequestsByCityUseCase } from "./ListRequestsByCityUseCase";


class ListRequestsByCityController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { city_id } = request.query

        const listRequestsByCity = container.resolve(ListRequestsByCityUseCase)

        const requests = await listRequestsByCity.execute({city_id})

        return response.json(requests)
    }
}

export { ListRequestsByCityController }