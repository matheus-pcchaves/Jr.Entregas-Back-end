import { Router } from "express"
import { ensureAdmin } from "../middlewares/ensureAdmin"
import { ensureUsersAuthenticated } from "../middlewares/ensureUsersAuthenticated"
import { CreateCitiesController } from "../modules/Cities/useCases/CreateCities/CreateCitiesController"
import { ListCitiesController } from "../modules/Cities/useCases/ListCities/ListCitiesController"

const citiesRoutes = Router()

const createCitiesController = new CreateCitiesController()
const listCitiesController = new ListCitiesController()

citiesRoutes.post("/create", ensureUsersAuthenticated, ensureAdmin, createCitiesController.handle)

citiesRoutes.get("/list", listCitiesController.handle)

export { citiesRoutes }