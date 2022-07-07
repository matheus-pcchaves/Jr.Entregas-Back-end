import { Request, Response } from "express"
import { container } from "tsyringe"
import { AuthenticateDeliverymansUseCase } from "./AuthenticateDeliverymansUseCase"

class AuthenticateDeliverymansController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { email, password } = request.body

        const authenticateDeliverymansUseCase = container.resolve(AuthenticateDeliverymansUseCase)

        const token = await authenticateDeliverymansUseCase.execute({
            email,
            password
        })

        return response.json(token)
    }
}

export { AuthenticateDeliverymansController }