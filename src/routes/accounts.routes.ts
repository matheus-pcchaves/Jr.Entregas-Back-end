import { Router } from "express"
import usersController from "../modules/Accounts/UseCases/CreateUsers/index"
import { entregadoresController } from "../modules/Accounts/UseCases/CreateEntregadores"

const usersRoutes = Router()
const entregadoresRoutes = Router()

usersRoutes.post("/create", (request, response) => {
    usersController().handle(request, response)
})

entregadoresRoutes.post("/create", (request, response) => {
    entregadoresController.handle(request, response)
})

export { usersRoutes, entregadoresRoutes }