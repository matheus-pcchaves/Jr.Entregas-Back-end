import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { CreateRequestsController } from "../modules/RequestDelivery/Request/CreateRequests/CreateRequestController";
import { ListRequestsByCityController } from "../modules/RequestDelivery/Request/ListRequests/ListRequestsByCityController"

const requestsRoutes = Router()

const createRequestsController = new CreateRequestsController()
const listRequestsByCityController = new ListRequestsByCityController()

requestsRoutes.get("/list", listRequestsByCityController.handle)
requestsRoutes.use(ensureAuthenticated)
requestsRoutes.post("/create", createRequestsController.handle)

export { requestsRoutes }