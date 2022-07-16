import { Router } from "express";
import { CreateDeliveriesController } from "../modules/RequestsDeliveries/useCases/Deliveries/CreateDeliveries/CreateDeliveriesController";

import { ensureDeliverymansAuthenticated } from "../middlewares/ensureDeliverymansAuthenticated"
import { FinishDeliveriesController } from "@modules/RequestsDeliveries/useCases/Deliveries/FinishDeliveries/FinishDeliveriesController";

const deliveryRoutes = Router()

const createDeliveriesController = new CreateDeliveriesController()
const finishDeliveriesController = new FinishDeliveriesController()

deliveryRoutes.post("/accept", ensureDeliverymansAuthenticated, createDeliveriesController.handle)
deliveryRoutes.post("/finish", finishDeliveriesController.handle)

export { deliveryRoutes }