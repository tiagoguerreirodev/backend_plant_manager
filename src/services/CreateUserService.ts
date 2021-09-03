import { AppError } from "../errors/AppError";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface ICreateUserRequest {
	name: string;
	email: string;
	id: string;
}

class CreateUserService {
	private usersRepository: IUsersRepository;

	constructor(usersRepository: IUsersRepository) {
		this.usersRepository = usersRepository;
	}

	async execute({ name, email, id }: ICreateUserRequest) {
		if (!email) {
			throw new AppError("Incorrect email.");
		}

		const userAlreadyExists = await this.usersRepository.findByEmail(email);

		if (userAlreadyExists) {
			throw new AppError("User already exists.");
		}

		await this.usersRepository.create({
			name,
			email,
			id,
		});
	}
}

export { CreateUserService };
