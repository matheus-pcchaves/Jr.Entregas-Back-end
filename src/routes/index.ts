import { Router } from "express";
import { usersRoutes, entregadoresRoutes } from "./accounts.routes";
import { citiesRoutes } from "./cities.routes";
import { paymentsRoutes } from "./payments.routes";

const router = Router()

try {
    router.use("/users", usersRoutes)
    router.use("/entregadores", entregadoresRoutes)
    router.use("/cities", citiesRoutes)
    router.use("/payments", paymentsRoutes)
} catch (error) {
    console.log(error)
}

export { router }