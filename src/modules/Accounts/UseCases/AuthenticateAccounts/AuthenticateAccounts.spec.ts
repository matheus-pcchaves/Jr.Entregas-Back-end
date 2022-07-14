import { IUsersDTO } from "../../dtos/IUsersDTO"
import { UsersRepositoryInMemory } from "../../repositories/In-memory/UsersRepositoryInMemory"
import { AppError } from "../../../../errors/AppError"

import { CreateUsersUseCase } from "../CreateUsers/CreateUsersUseCase"
import { AuthenticateUsersUseCase } from "./AuthenticateUsersUseCase"

let authenticateUserUseCase: AuthenticateUsersUseCase
let userRepositoryInMemory: UsersRepositoryInMemory
let createUserUseCase: CreateUsersUseCase

describe("Authenticate an user", () => {

    beforeEach(() => {
        userRepositoryInMemory = new UsersRepositoryInMemory()
        authenticateUserUseCase = new AuthenticateUsersUseCase(userRepositoryInMemory)
        createUserUseCase = new CreateUsersUseCase(userRepositoryInMemory)
    })
    
    it("Should be able to authenticate an user", async () => {
        const user: IUsersDTO = {
            name: "Test",
            email: "test@email.com.br",
            password: "tests",
            cpfcnpj: "123456"
        }

        await createUserUseCase.execute(user)

        const result = authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        })

        expect(result).toHaveProperty("token")
    })

    it("Should not be able to authenticate a nonexistent user", async () => {
        expect(async () => {
            const result = authenticateUserUseCase.execute({
                email: "false@email.com",
                password: "falsepassword"
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    it("Should not be able to authenticate a nonexistent user", async () => {
        expect(async () => {
            const user: IUsersDTO = {
                name: "Test",
                email: "test@email.com.br",
                password: "tests",
                cpfcnpj: "123456"
            }
    
            await createUserUseCase.execute(user)

            const result = authenticateUserUseCase.execute({
                email: "test@email.com.br",
                password: "incorrect password"
            })
            
        }).rejects.toBeInstanceOf(AppError)
    })
})