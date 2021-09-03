import { User } from "../entities/User";

export interface ICreateUserDTO {
	name: string;
	email: string;
	id: string;
}

export interface IUsersRepository {
	create(data: ICreateUserDTO): Promise<void>;
	findByEmail(email: string): Promise<User | undefined>;
}
