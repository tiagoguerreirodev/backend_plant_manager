import "dotenv/config";
import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import "./database";
import { router } from "./routes";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());

app.use(router);

app.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof AppError) {
			response.status(err.statusCode).json({
				error: err.message,
			});
		}

		return response.status(500).json({
			status: "error",
			message: "Internal server error.",
		});
	}
);

export { app };
