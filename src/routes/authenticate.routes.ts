import { Router } from "express"

import { AuthenticateUsersController } from "../modules/Accounts/useCases/AuthenticateAccounts/AuthenticateUsersController"
import { AuthenticateDeliverymansController } from "../modules/Accounts/useCases/AuthenticateAccounts/AuthenticateDeliverymansController"

const authenticateRoutes = Router()

const authenticateUsersController = new AuthenticateUsersController()
const authenticateDeliverymansController = new AuthenticateDeliverymansController()

authenticateRoutes.post("/user", authenticateUsersController.handle)
authenticateRoutes.post("/deliveryman", authenticateDeliverymansController.handle)

export { authenticateRoutes }