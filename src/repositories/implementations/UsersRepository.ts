import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;
  
  constructor() {
    this.repository = getRepository(User)
  }
  
  async create(data: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, data);

    const userCreated = this.repository.create(user);

    await this.repository.save(userCreated);
  }
  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ email });
  }
  
}

export { UsersRepository };
