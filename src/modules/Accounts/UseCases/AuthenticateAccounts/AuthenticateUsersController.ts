import { Request, Response } from "express"
import { container } from "tsyringe"
import { AuthenticateUsersUseCase } from "./AuthenticateUsersUseCase"

class AuthenticateUsersController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { password, email } = request.body

        const authenticateUserUseCase = container.resolve(AuthenticateUsersUseCase)

        const token = await authenticateUserUseCase.execute({
            email,
            password
        })

        return response.json(token)
    }
}

export { AuthenticateUsersController }