import { Router } from "express";

import { ensureUsersAuthenticated } from "../middlewares/ensureUsersAuthenticated";
import { ensureDeliverymansAuthenticated } from "../middlewares/ensureDeliverymansAuthenticated"
import { CreateRequestsController } from "../modules/RequestsDeliveries/useCases/Requests/CreateRequests/CreateRequestController";
import { ListPendingByCityController } from "../modules/RequestsDeliveries/useCases/Requests/ListPendingRequestsByCity/ListPendingByCityController"

const requestsRoutes = Router()

const createRequestsController = new CreateRequestsController()
const listPendingByCityController = new ListPendingByCityController()

requestsRoutes.post("/create", ensureUsersAuthenticated, createRequestsController.handle)
requestsRoutes.get("/list", ensureDeliverymansAuthenticated, listPendingByCityController.handle)

export { requestsRoutes }