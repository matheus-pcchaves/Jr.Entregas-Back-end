import { Router } from "express"
import { CreateUsersController } from "../modules/Accounts/UseCases/CreateUsers/CreateUsersController"
import { deliverymansController } from "../modules/Accounts/UseCases/CreateDeliverymans"

const usersRoutes = Router()
const entregadoresRoutes = Router()

const usersController = new CreateUsersController()

usersRoutes.post("/create", usersController.handle)

entregadoresRoutes.post("/create", (request, response) => {
    deliverymansController.handle(request, response)
})

export { usersRoutes, entregadoresRoutes }