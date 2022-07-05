import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUsersController } from "./CreateUsersController";
import { CreateUsersUseCase } from "./CreateUsersUseCase";

export default (): CreateUsersController => {
    const usersRepository = new UsersRepository()
    const createUsersUseCase = new CreateUsersUseCase(usersRepository)
    const usersController = new CreateUsersController(createUsersUseCase)

    return usersController
} 