import { Router } from "express";
import { usersRoutes, entregadoresRoutes } from "./accounts.routes";
import { citiesRoutes } from "./cities.routes";

const router = Router()

try {
    router.use("/users", usersRoutes)
    router.use("/entregadores", entregadoresRoutes)
    router.use("/cities", citiesRoutes)
} catch (error) {
    console.log(error)
}

export { router }