import { Router } from "express";
import { CreateDeliveriesController } from "../modules/RequestsDeliveries/useCases/Deliveries/CreateDeliveriesController";

import { ensureDeliverymansAuthenticated } from "../middlewares/EnsureDeliverymansAuthenticated"

const deliveryRoutes = Router()

const createDeliveriesController = new CreateDeliveriesController()

deliveryRoutes.post("/accept", ensureDeliverymansAuthenticated, createDeliveriesController.handle)

export { deliveryRoutes }