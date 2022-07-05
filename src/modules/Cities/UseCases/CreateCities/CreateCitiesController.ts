import { Request, Response } from "express"
import { CreateCitiesUseCase } from "./CreateCitiesUseCase";

class CreateCitiesController{
    
    constructor(
        private createCitiesUseCase: CreateCitiesUseCase
    ){}

    handle(request: Request, response: Response): Response{
        const { name } = request.body

        this.createCitiesUseCase.execute({name})

        return response.status(201).send()
    }
}

export { CreateCitiesController }