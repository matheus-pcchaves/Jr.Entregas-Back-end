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
        return this.users.find(user => user.name === name)
    }

    async findByEmail(email: string): Promise<User> {
        return this.users.find(user => user.email === email)
    }

    async findByDocument(cpfcnpj: string): Promise<User> {
        return this.users.find(user => user.cpfcnpj === cpfcnpj)
    }
    
    async findById(id: string): Promise<User> {
        return this.users.find(user => user.id === id)
    }
}

export { UsersRepositoryInMemory }