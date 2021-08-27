import request from "supertest";
import { Connection, createConnection } from "typeorm";
import { app } from "../app";

let connection: Connection;

describe("User creation", () => {
	beforeAll(async () => {
		connection = await createConnection("test");
		await connection.runMigrations();
	});

	afterAll(async () => {
		await connection.dropDatabase();
		await connection.close();
	});

	it("should receive name and email, creating an user if it does not exist.", async () => {
		const testUser = {
			name: "tiago",
			email: "tiago.guerreiro76@gmail.com",
		};

		let response = await request(app).post("/createUser").send(testUser);

		expect(response.status).toBe(200);
		expect(response.body).toEqual(expect.objectContaining({ name: 'tiago' }))
	});
});
