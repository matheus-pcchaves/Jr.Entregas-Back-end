import { IDeliverymansDTO } from "../dtos/IDeliverymansDTO"
import { Deliveryman } from "../entities/Deliveryman"

interface IDeliverymansRepository {
    create(data: IDeliverymansDTO): Promise<void>
    findByName(name: string): Promise<Deliveryman>
    findByEmail(email: string): Promise<Deliveryman>
    findByDriverLicense(driver_license: string): Promise<Deliveryman>
    findByCityId(city_id: string): Promise<Deliveryman>
}

export { IDeliverymansRepository }