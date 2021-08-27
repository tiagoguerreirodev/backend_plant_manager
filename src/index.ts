import "reflect-metadata";
import express, { Request, Response } from "express";
import "express-async-errors";

import {createConnection} from "./database";
import { router } from "./routes";
import 'dotenv/config';

createConnection();

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response) => {
	if (err instanceof Error) {
		response.status(400).json({
			error: err.message,
		});
	}

	return response.status(500).json({
		status: "error",
		message: "Internal server error.",
	});
});

export { app };
