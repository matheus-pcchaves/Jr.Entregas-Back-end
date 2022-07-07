import { compare } from "bcryptjs";
import { AppError } from "../../../../errors/AppError";
import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";

import { IDeliverymansRepository } from "../../repositories/IDeliverymansRepository";

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
class AuthenticateDeliverymansUseCase {

    constructor(
        @inject("DeliverymansRepository")
        private deliverymansRepository: IDeliverymansRepository
    ){}

    async execute({ email, password }: IRequest){
        const user = await this.deliverymansRepository.findByEmail(email)

        if(!user){
            throw new AppError('Email/password incorrect')
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new AppError('Email/password incorrect')
        }

        const token = sign({city: user.city_id}, "afbc583b1997bf40546fcf9e32a6184d", {
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

export { AuthenticateDeliverymansUseCase }