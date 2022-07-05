import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateUsersUseCase } from "./CreateUsersUseCase"

class CreateUsersController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, email, password, cpfcnpj } = request.body

        const createUsersUseCase = container.resolve(CreateUsersUseCase)

        await createUsersUseCase.execute({name, email, password, cpfcnpj})

        return response.status(201).send()
    }
}

export { CreateUsersController }