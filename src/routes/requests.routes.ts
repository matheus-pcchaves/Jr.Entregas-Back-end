import { Router } from "express";

import { ensureUsersAuthenticated } from "../middlewares/EnsureUsersAuthenticated";
import { ensureDeliverymansAuthenticated } from "../middlewares/EnsureDeliverymansAuthenticated"
import { CreateRequestsController } from "../modules/RequestDelivery/Request/CreateRequests/CreateRequestController";
import { ListPendingByCityController } from "../modules/RequestDelivery/Request/ListPendingRequestsByCity/ListPendingByCityController"

const requestsRoutes = Router()

const createRequestsController = new CreateRequestsController()
const listPendingByCityController = new ListPendingByCityController()

requestsRoutes.post("/create", ensureUsersAuthenticated, createRequestsController.handle)
requestsRoutes.get("/list", ensureDeliverymansAuthenticated, listPendingByCityController.handle)

export { requestsRoutes }