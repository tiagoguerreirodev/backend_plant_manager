import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

interface ICreateUserRequest {
	name: string;
	email: string;
}

class CreateUserService {
	async execute({ name, email }: ICreateUserRequest) {
		const userRepositories = getCustomRepository(UserRepositories);

		if (!email) {
			throw new Error("Incorrect email.");
		}

		const userAlreadyExists = await userRepositories.findOne({
			email,
		});

		if (userAlreadyExists) {
			throw new Error("User already exists.");
		}

		const user = userRepositories.create({
			name,
			email,
		});

		await userRepositories.save(user);

		return user;
	}
}

export { CreateUserService };
