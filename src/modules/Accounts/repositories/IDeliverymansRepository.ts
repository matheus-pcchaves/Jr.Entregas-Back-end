import { Deliveryman } from "../entities/Deliveryman"

interface IDeliverymansDTO {
    name: string;
    email: string;
    password: string;
    cidade_id: string;
    driver_license: string;
    vehicle_license: string;
}

interface IDeliverymansRepository {
    create(data: IDeliverymansDTO): void
    findByName(name: string): Deliveryman
    findByEmail(email: string): Deliveryman
}

export { IDeliverymansDTO, IDeliverymansRepository }