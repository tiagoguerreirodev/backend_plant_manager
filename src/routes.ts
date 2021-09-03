import { Router } from "express";
import { CreatePlantController } from "./controllers/CreatePlantController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const createPlantController = new CreatePlantController();

router.post("/users", createUserController.handle);
router.post("/plants", createPlantController.handle);

export { router };
