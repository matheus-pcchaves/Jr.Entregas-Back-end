import { Router } from "express";
import { CreateRequestsController } from "../modules/RequestDelivery/Request/CreateRequestController";

const requestsRoutes = Router()

const createRequestsController = new CreateRequestsController()

requestsRoutes.post("/create", createRequestsController.handle)

export { requestsRoutes }