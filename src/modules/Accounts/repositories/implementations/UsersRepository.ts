import { getRepository, Repository } from "typeorm"
import { User } from "../../entities/User"
import { IUsersDTO, IUsersRepository } from "../IUsersRepository" 

class UsersRepository implements IUsersRepository{

    private repository: Repository<User>

    public constructor(){
        this.repository = getRepository(User)
    }

    async create({ name, email, password, cpfcnpj }: IUsersDTO): Promise<void>{
        
        const user = this.repository.create({
            name,
            email,
            password,
            cpfcnpj
        })

        await this.repository.save(user)
    }

    async list(): Promise<User[]> {
        const users = await this.repository.find()

        return users
    }

    async findByName(name: string): Promise<User> {
        const user = await this.repository.findOne({name})

        return user
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email})

        return user
    }
}

export { UsersRepository }