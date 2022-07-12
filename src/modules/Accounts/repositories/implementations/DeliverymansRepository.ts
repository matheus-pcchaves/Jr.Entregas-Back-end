import { getRepository, Repository } from "typeorm"
import { Deliveryman } from "../../entities/Deliveryman"
import { IDeliverymansRepository } from "../IDeliverymansRepository" 
import { IDeliverymansDTO } from "../../dtos/IDeliverymansDTO"

class DeliverymansRepository implements IDeliverymansRepository{

    private repository: Repository<Deliveryman>

    public constructor(){
        this.repository = getRepository(Deliveryman)
    }

    async create({name, email, password, city_id, driver_license, vehicle_document}: IDeliverymansDTO): Promise<void>{
        const deliveryman = await this.repository.create({
            name,
            email,
            password,
            city_id,
            driver_license,
            vehicle_document
        })

        await this.repository.save(deliveryman)
    }

    async list(): Promise<Deliveryman[]> {
        const deliverymans = await this.repository.find()

        return deliverymans
    }

    async findByName(name: string): Promise<Deliveryman> {
        const deliverymanName = this.repository.findOne({name})

        return deliverymanName
    }

    async findByEmail(email: string): Promise<Deliveryman> {
        const deliverymanEmail = this.repository.findOne({email})

        return deliverymanEmail
    }

    async findByDriverLicense(driver_license: string): Promise<Deliveryman> {
        const deliverymanDriverLicense = this.repository.findOne({driver_license})

        return deliverymanDriverLicense
    }

    async findByCity(city_id: string): Promise<Deliveryman> {
        const deliverymanCityId = await this.repository.findOne({city_id})

        return deliverymanCityId
    }

    async findById(id: string): Promise<Deliveryman> {
        const deliveryman = await this.repository.findOne(id)

        return deliveryman
    }
}

export { DeliverymansRepository }