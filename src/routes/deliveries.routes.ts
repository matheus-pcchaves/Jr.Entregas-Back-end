import { CreateDeliveriesController } from "@modules/RequestsDeliveries/useCases/Deliveries/CreateDeliveriesController";
import { Router } from "express";

import { ensureDeliverymansAuthenticated } from "../middlewares/EnsureDeliverymansAuthenticated"

const deliveryRoutes = Router()

const createDeliveriesController = new CreateDeliveriesController()

deliveryRoutes.post("/accept", createDeliveriesController.handle)

export { deliveryRoutes }