import { compare } from "bcryptjs";
import { AppError } from "../../../../errors/AppError";
import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest{
    email: string;
    password: string
}

interface IResponse{
    user: {
        name: string;
        email: string
    };
    token: string
}

@injectable()
class AuthenticateUsersUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({email, password}: IRequest){

        const user = await this.usersRepository.findByEmail(email)

        if(!user){
            throw new AppError('Email/password incorrect')
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new AppError('Email/password incorrect')
        }

        const token = sign({}, "afbc583b1997bf40546fcf9e32a6184d", {
            subject: user.id,
            expiresIn: "1d"
        })

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn
    }
}

export { AuthenticateUsersUseCase }