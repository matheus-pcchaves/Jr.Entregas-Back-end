import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { CreateRequestsController } from "../modules/RequestDelivery/Request/CreateRequests/CreateRequestController";
import { ListPendingByCityController } from "../modules/RequestDelivery/Request/ListPendingRequestsByCity/ListPendingByCityController"

const requestsRoutes = Router()

const createRequestsController = new CreateRequestsController()
const listPendingByCityController = new ListPendingByCityController()

requestsRoutes.get("/list", listPendingByCityController.handle)
requestsRoutes.use(ensureAuthenticated)
requestsRoutes.post("/create", createRequestsController.handle)

export { requestsRoutes }