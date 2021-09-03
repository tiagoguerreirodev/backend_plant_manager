import { Request, Response } from "express";
import { UsersRepository } from "../repositories/implementations/UsersRepository";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
	async handle(request: Request, response: Response) {
		const { name, email, id } = request.body;

		const usersRepository = new UsersRepository();
		const createUserService = new CreateUserService(usersRepository);

		await createUserService.execute({ name, email, id });

		return response.send();
	}
}

export { CreateUserController };
