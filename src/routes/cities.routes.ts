import { Router } from "express"
import { createCitiesController } from "../modules/Cities/UseCases/CreateCities"
import { listCitiesController } from "../modules/Cities/UseCases/ListCities"

const citiesRoutes = Router()

citiesRoutes.post("/create", (request, response) => {
    return createCitiesController.handle(request, response)
})

citiesRoutes.get("/list", (request, response) => {
    return listCitiesController.handle(request, response)
})

export { citiesRoutes }