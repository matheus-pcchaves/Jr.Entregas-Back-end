import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUsersDTO } from "@modules/Accounts/dtos/IUsersDTO";

@injectable()
class CreateUsersUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({name, email, password, cpfcnpj}: IUsersDTO): Promise<void>{
        const userAlreadyExists = await this.usersRepository.findByEmail(email)

        if(userAlreadyExists){
            throw new AppError('User already exists')
        }

        const documentAlreadyExists = await this.usersRepository.findByDocument(cpfcnpj)

        if(documentAlreadyExists){
            throw new AppError('incorrect data');
        }

        await this.usersRepository.create({
            name,
            email,
            password,
            cpfcnpj
        })
    }
}

export { CreateUsersUseCase }