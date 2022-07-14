import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin"
import { ensureUsersAuthenticated } from "../middlewares/ensureUsersAuthenticated"
import { CreatePaymentsController } from "../modules/Payments/useCases/CreatePayments/CreatePaymentsController";
import { ListPaymentsController } from "../modules/Payments/useCases/ListPayments/ListPaymentsController";

const paymentsRoutes = Router()

const createPaymentsController = new CreatePaymentsController()
const listPaymentsController = new ListPaymentsController()

paymentsRoutes.post("/create", ensureUsersAuthenticated, ensureAdmin, createPaymentsController.handle)
paymentsRoutes.get("/list", listPaymentsController.handle)

export { paymentsRoutes }