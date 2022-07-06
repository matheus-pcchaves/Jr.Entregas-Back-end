import { Router } from "express"
import { CreateUsersController } from "../modules/Accounts/UseCases/CreateUsers/CreateUsersController"
import { CreateDeliverymansController } from "../modules/Accounts/UseCases/CreateDeliverymans/CreateDeliverymansController"

const usersRoutes = Router()
const entregadoresRoutes = Router()

const usersController = new CreateUsersController()
const deliverymansController = new CreateDeliverymansController()

usersRoutes.post("/create", usersController.handle)

entregadoresRoutes.post("/create", deliverymansController.handle)

export { usersRoutes, entregadoresRoutes }