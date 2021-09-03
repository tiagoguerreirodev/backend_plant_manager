import { AppError } from "../errors/AppError";
import { CreateUserService } from "../services/CreateUserService";
import { UsersRepositoryMock } from "./mocks/UsersRepositoryMock";

let createUserService: CreateUserService;
let usersRepository: UsersRepositoryMock;

describe("CreateUserService", () => {
	beforeEach(() => {
		usersRepository = new UsersRepositoryMock();
		createUserService = new CreateUserService(usersRepository);
	});

	it("should be able to create a new user", async () => {
		const user = {
			name: "John Doe",
			email: "johndoe@email.com",
			id: "123123",
		};

		await createUserService.execute(user);

		const foundUser = await usersRepository.findByEmail(user.email);

		expect(foundUser).toEqual(expect.objectContaining(user));
	});

	it("should not be able to create two users with the same email", async () => {
		const user = {
			name: "John Doe",
			email: "johndoe@email.com",
			id: "123123",
		};

		await createUserService.execute(user);

		await expect(createUserService.execute(user)).rejects.toBeInstanceOf(
			AppError
		);
	});
});
