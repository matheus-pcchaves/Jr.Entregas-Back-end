import { Router } from "express";
import { CreatePaymentsController } from "../modules/Payments/UseCases/CreatePayments/CreatePaymentsController";
import { ListPaymentsController } from "../modules/Payments/UseCases/ListPayments/ListPaymentsController";

const paymentsRoutes = Router()

const createPaymentsController = new CreatePaymentsController()
const listPaymentsController = new ListPaymentsController()

paymentsRoutes.post("/create", createPaymentsController.handle)
paymentsRoutes.get("/list", listPaymentsController.handle)

export { paymentsRoutes }