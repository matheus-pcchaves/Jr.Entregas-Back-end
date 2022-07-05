import { DeliverymansRepository } from "../../repositories/implementations/DeliverymansRepository";
import { CreateDeliverymansController } from "./CreateDeliverymansController";
import { CreateDeliverymansUseCase } from "./CreateDeliverymansUseCase";

const deliverymansRepository = new DeliverymansRepository()
const deliverymansUseCase = new CreateDeliverymansUseCase(deliverymansRepository)
const deliverymansController = new CreateDeliverymansController(deliverymansUseCase)

export { deliverymansController }