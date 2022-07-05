import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository, IUsersDTO } from "../../repositories/IUsersRepository";

@injectable()
class CreateUsersUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({name, email, password, cpfcnpj}: IUsersDTO): Promise<void>{
        const userAlreadyExists = await this.usersRepository.findByEmail(email)

        if(userAlreadyExists){
            throw new AppError('Email já cadastrado')
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