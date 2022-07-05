import { Request, Response } from "express"
import { ListCitiesUseCase } from "./ListCitiesUseCase";

class ListCitiesController {

    constructor(
        private listCitiesUseCase: ListCitiesUseCase
    ){}

    handle(request: Request, response: Response): Response{
        const all = this.listCitiesUseCase.execute()

        return response.json(all)
    }
}

export { ListCitiesController }