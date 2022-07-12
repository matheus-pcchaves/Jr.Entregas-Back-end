import { container} from "tsyringe"

import "../../shared/container/providers"

import { ICitiesRepository } from "../../modules/Cities/repositories/ICitiesRepository"
import { CitiesRepository } from "../../modules/Cities/repositories/implementations/CitiesRepository"
import { UsersRepository } from "../../modules/Accounts/repositories/implementations/UsersRepository"
import { IUsersRepository } from "../../modules/Accounts/repositories/IUsersRepository"
import { IDeliverymansRepository } from "../../modules/Accounts/repositories/IDeliverymansRepository"
import { DeliverymansRepository } from "../../modules/Accounts/repositories/implementations/DeliverymansRepository"
import { IPaymentsRepository } from "../../modules/Payments/repositories/IPaymentsRepository"
import { PaymentsRepository } from "../../modules/Payments/repositories/implementations/PaymentsRepository"
import { IRequestsRepository } from "../../modules/RequestsDeliveries/repositories/IRequestsRepository"
import { RequestsRepository } from "../../modules/RequestsDeliveries/repositories/implementations/RequestsRepository"
import { IDeliveriesRepository } from "@modules/RequestsDeliveries/repositories/IDeliveriesRepository"
import { DeliveriesRepository } from "@modules/RequestsDeliveries/repositories/implementations/DeliveriesRepository"

container.registerSingleton<ICitiesRepository>(
    "CitiesRepository",
    CitiesRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)

container.registerSingleton<IDeliverymansRepository>(
    "DeliverymansRepository",
    DeliverymansRepository
)

container.registerSingleton<IPaymentsRepository>(
    "PaymentsRepository",
    PaymentsRepository
)

container.registerSingleton<IRequestsRepository>(
    "RequestsRepository",
    RequestsRepository
)

container.registerSingleton<IDeliveriesRepository>(
    "DeliveriesRepository",
    DeliveriesRepository
)