import { AppError } from "../../../../errors/AppError";
import { IDeliverymansDTO, IDeliverymansRepository } from "../../repositories/IDeliverymansRepository";

class CreateDeliverymansUseCase {
    constructor(
        private deliverymansRepository: IDeliverymansRepository
    ){}

    execute({name, email, password, cidade_id, driver_license, vehicle_license}: IDeliverymansDTO): void{
        
        const userAlreadyExists = this.deliverymansRepository.findByEmail(email)

        if(userAlreadyExists){
            throw new AppError('Email já cadastrado')
        }

        this.deliverymansRepository.create({
            name,
            email,
            password,
            cidade_id,
            driver_license,
            vehicle_license
        })
    }
}

export { CreateDeliverymansUseCase }