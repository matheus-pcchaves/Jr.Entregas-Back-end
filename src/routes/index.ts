import { Router } from "express";
import { usersRoutes, entregadoresRoutes } from "./accounts.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { citiesRoutes } from "./cities.routes";
import { paymentsRoutes } from "./payments.routes";
import { requestsRoutes } from "./requests.routes";

const router = Router()

try {
    router.use("/users", usersRoutes)
    router.use("/entregadores", entregadoresRoutes)
    router.use("/cities", citiesRoutes)
    router.use("/payments", paymentsRoutes)
    router.use("/requests", requestsRoutes)
    router.use("/login", authenticateRoutes)
} catch (error) {
    console.log(error)
}

export { router }