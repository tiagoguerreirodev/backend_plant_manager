import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();

router.post("/createUser", createUserController.handle);

export { router };
