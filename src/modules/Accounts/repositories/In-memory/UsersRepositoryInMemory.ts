import { IUsersDTO } from "@modules/Accounts/dtos/IUsersDTO";
import { User } from "@modules/Accounts/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {

    users: User[] = []

    async create({ name, email, password, cpfcnpj }: IUsersDTO): Promise<void> {
        const user = new User()

        Object.assign(user, ({
            name,
            email,
            password,
            cpfcnpj
        }))

        this.users.push(user)
    }

    async list(): Promise<User[]> {
        const all = this.users

        return all
    }

    async findByName(name: string): Promise<User> {
        const user = this.users.find((name) => user.name === name)

        return user
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find((email) => user.email === email)

        return user
    }

    async findByDocument(cpfcnpj: string): Promise<User> {
        const user = this.users.find((cpfcnpj) => user.cpfcnpj === cpfcnpj)

        return user
    }
    
    async findById(id: string): Promise<User> {
        const user = this.users.find((id) => user.id === id)

        return user
    }
}

export { UsersRepositoryInMemory }