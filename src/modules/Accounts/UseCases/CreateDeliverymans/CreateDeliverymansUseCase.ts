import { AppError } from "../../../../errors/AppError";
import { IDeliverymansRepository } from "../../repositories/IDeliverymansRepository";
import { IDeliverymansDTO } from "../../dtos/IDeliverymansDTO";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateDeliverymansUseCase {
    constructor(
        @inject("DeliverymansRepository")
        private deliverymansRepository: IDeliverymansRepository
    ){}

    async execute({name, email, password, city_id, driver_license, vehicle_document}: IDeliverymansDTO): Promise<void>{
        
        const userAlreadyExists = await this.deliverymansRepository.findByEmail(email)

        if(userAlreadyExists){
            throw new AppError('User already exists')
        }

        const driverLicenseAlreadyRegistered = await this.deliverymansRepository.findByDriverLicense(driver_license)

        if(driverLicenseAlreadyRegistered){
            throw new AppError('Driver license already registered')
        }

        await this.deliverymansRepository.create({
            name,
            email,
            password,
            city_id,
            driver_license,
            vehicle_document
        })
    }
}

export { CreateDeliverymansUseCase }