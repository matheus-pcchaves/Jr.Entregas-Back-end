import { User } from "../entities/User";

interface IUsersDTO{
    name: string;
    email: string;
    password: string;
    cpfcnpj: string;
}

interface IUsersRepository {
    create(data: IUsersDTO): Promise<void>
    list(): Promise<User []>
    findByName(name: string): Promise<User>
    findByEmail(email: string): Promise<User>
}

export { IUsersDTO, IUsersRepository }