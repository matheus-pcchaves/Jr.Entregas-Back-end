import { Request, Response } from "express"
import { container} from "tsyringe"
import { CreateCitiesUseCase } from "./CreateCitiesUseCase";

class CreateCitiesController{

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, state } = request.body

        const createCitiesUseCase = container.resolve(CreateCitiesUseCase)

        await createCitiesUseCase.execute({name, state})

        return response.status(201).send()
    }
}

export { CreateCitiesController }