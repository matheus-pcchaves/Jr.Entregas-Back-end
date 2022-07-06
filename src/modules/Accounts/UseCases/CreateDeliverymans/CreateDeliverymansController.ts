import { Request, Response } from "express"
import { container } from "tsyringe";
import { CreateDeliverymansUseCase } from "./CreateDeliverymansUseCase";

class CreateDeliverymansController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { 
            name,
            email, 
            password, 
            city_id, 
            driver_license, 
            vehicle_document
        } = request.body

        const createDeliverymansUseCase = container.resolve(CreateDeliverymansUseCase)

        await createDeliverymansUseCase.execute({
            name,
            email, 
            password, 
            city_id, 
            driver_license, 
            vehicle_document
        })

        return response.status(201).send()
    }
}

export { CreateDeliverymansController }