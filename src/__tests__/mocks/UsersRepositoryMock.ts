import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../../repositories/IUsersRepository";

export class UsersRepositoryMock implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }
  
  async create(data: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, data);

    this.users.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email);
  }

}