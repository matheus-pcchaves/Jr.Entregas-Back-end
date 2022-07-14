import { AppError } from "../errors/AppError"
import { UsersRepository } from "../modules/Accounts/repositories/implementations/UsersRepository"
import { NextFunction, Request, Response } from "express"

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const { id } = request.user

    const usersRepository = new UsersRepository()
    const user = await usersRepository.findById(id)

    if(!user.isAdmin){
        throw new AppError('User unauthorized')
    }

    return next()
}