import { Request, Response } from "express"
import { CreateUsersUseCase } from "./CreateUsersUseCase"

class CreateUsersController {

    constructor(
        private createUsersUseCase: CreateUsersUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, email, password, cpfcnpj } = request.body

        await this.createUsersUseCase.execute({name, email, password, cpfcnpj})

        return response.status(201).send()
    }
}

export { CreateUsersController }