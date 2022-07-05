import { Request, Response } from "express"
import { CreateDeliverymansUseCase } from "./CreateDeliverymansUseCase";

class CreateDeliverymansController {
    constructor(
        private createDeliverymansUseCase: CreateDeliverymansUseCase
    ){}

    handle(request: Request, response: Response): Response{
        const { 
            name,
            email, 
            password, 
            cidade_id, 
            driver_license, 
            vehicle_document
        } = request.body

        this.createDeliverymansUseCase.execute({
            name,
            email, 
            password, 
            cidade_id, 
            driver_license, 
            vehicle_document
        })

        return response.status(201).send()
    }
}

export { CreateDeliverymansController }