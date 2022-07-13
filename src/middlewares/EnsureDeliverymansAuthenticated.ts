import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { verify } from "jsonwebtoken";

import { DeliverymansRepository } from "../modules/Accounts/repositories/implementations/DeliverymansRepository";

interface IPayLoad {
    sub: string
}

export async function ensureDeliverymansAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization

    if(!authHeader){
        throw new Error('Token missing')
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: deliveryman_id } = verify(token, "afbc583b1997bf40546fcf9e32a6184d") as IPayLoad

        const deliverymansRepository = new DeliverymansRepository()

        const user = await deliverymansRepository.findById(deliveryman_id)

        if(!user){
            throw new AppError('User does not exists')
        }

        request.user = {
            id: deliveryman_id
        }

        next()
    } catch (error) {
        throw new AppError('Invalid token')
    }
}