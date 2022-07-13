import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/Accounts/repositories/implementations/UsersRepository";

interface IPayLoad {
    sub: string
}

export async function ensureUsersAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization

    if(!authHeader){
        throw new Error('Token missing')
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, "afbc583b1997bf40546fcf9e32a6184d") as IPayLoad

        const usersRepository = new UsersRepository()

        const user = await usersRepository.findById(user_id)

        if(!user){
            throw new AppError('User does not exists')
        }

        request.user = {
            id: user_id
        }

        next()
        
    } catch (error) {
        throw new AppError('Invalid token')
    }
}