import { Deliveryman } from "../../entities/Deliveryman"
import { IDeliverymansDTO, IDeliverymansRepository } from "../IDeliverymansRepository" 

class DeliverymansRepository implements IDeliverymansRepository{

    private deliverymans: Deliveryman []

    public static INSTANCE: DeliverymansRepository

    public constructor(){
        this.deliverymans = []
    }

    public static getInstance(): DeliverymansRepository{
        if(!DeliverymansRepository.INSTANCE){
            DeliverymansRepository.INSTANCE = new DeliverymansRepository()
        }

        return DeliverymansRepository.INSTANCE
    }

    create({name, email, password, cidade_id, driver_license, vehicle_license}: IDeliverymansDTO): void{
        const deliveryman = new Deliveryman()

        Object.assign(deliveryman, {
            name,
            email,
            password,
            cidade_id,
            driver_license,
            vehicle_license
        })

        this.deliverymans.push(deliveryman)
    }

    list(): Deliveryman[] {
        return this.deliverymans
    }

    findByName(name: string): Deliveryman {
        const deliveryman = this.deliverymans.find((deliveryman) => deliveryman.name === name)

        return deliveryman
    }

    findByEmail(email: string): Deliveryman {
        const deliveryman = this.deliverymans.find((deliveryman) => deliveryman.email === email)

        return deliveryman
    }
}

export { DeliverymansRepository }