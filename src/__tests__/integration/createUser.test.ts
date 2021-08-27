import request from 'supertest';
import { app } from '../../index';
import { Connection } from "typeorm";
import {createConnection} from '../../database';

let connection: Connection;

describe("User creation", () => {
	beforeAll(async () => {
		connection = await createConnection();

		connection.query('DROP TABLE IF EXISTS users');
		connection.runMigrations();
	});

	afterAll(async () => {
		await connection.dropDatabase();
		await connection.close();
	})

	it("should receive name and email, creating an user if it does not exist.", async () => {
		const response = await request(app).post("/users").send({
      name: "me",
      email: "email@verdadeiro.com",
    });

    expect(response.status).toBe(500);
		expect(response.body).toEqual(expect.objectContaining({
      name: "me",
      email: "email@verdadeiro.com",
    }))
	});
});
