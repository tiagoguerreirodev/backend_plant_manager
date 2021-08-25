const axios = require("axios");
const request = require("supertest");
const app = require("src/index.ts");

describe("User creation", () => {
	it("should receive name and email, creating an user if it does not exist.", async () => {
		const testUser = {
			name: "tiago",
			email: "tiago.guerreiro76@gmail.com",
		};

		let response = await axios.post(
			"http://localhost:3000/createUser",
			testUser
		);

		expect(testUser.email).toBe(response.data.email);
	});
	it("should fail if user already exists.", async () => {
		const testUser = {
			name: "tiago",
			email: "tiago.guerreiro76@gmail.com",
		};

		expect(await axios.post("http://localhost:3000/createUser", testUser));

		await expect(
			axios.post("http://localhost:3000/createUser", testUser)
		).rejects.toThrow("User already exists.");
	});
});
