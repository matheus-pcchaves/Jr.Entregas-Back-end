import { Router } from "express"
import { CreateCitiesController } from "../modules/Cities/UseCases/CreateCities/CreateCitiesController"
import { ListCitiesController } from "../modules/Cities/UseCases/ListCities/ListCitiesController"

const citiesRoutes = Router()

const createCitiesController = new CreateCitiesController()
const listCitiesController = new ListCitiesController()

citiesRoutes.post("/create", createCitiesController.handle)

citiesRoutes.get("/list", listCitiesController.handle)

export { citiesRoutes }