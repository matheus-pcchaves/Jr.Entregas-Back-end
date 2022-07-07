import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { CreateRequestsController } from "../modules/RequestDelivery/Request/CreateRequests/CreateRequestController";

const requestsRoutes = Router()

const createRequestsController = new CreateRequestsController()

requestsRoutes.use(ensureAuthenticated)
requestsRoutes.post("/create", createRequestsController.handle)

export { requestsRoutes }