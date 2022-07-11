import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { CreateRequestsController } from "../modules/RequestDelivery/Request/CreateRequests/CreateRequestController";
import { ListPendingByCityController } from "../modules/RequestDelivery/Request/ListPendingRequestsByCity/ListPendingByCityController"

const requestsRoutes = Router()

const createRequestsController = new CreateRequestsController()
const listPendingByCityController = new ListPendingByCityController()

requestsRoutes.post("/create", ensureAuthenticated, createRequestsController.handle)
requestsRoutes.get("/list", listPendingByCityController.handle)

export { requestsRoutes }