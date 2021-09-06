import { Router } from "express";
import { CreateHumidityController } from "./controllers/CreateHumidityController";
import { CreatePlantController } from "./controllers/CreatePlantController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const createPlantController = new CreatePlantController();
const createHumidityController = new CreateHumidityController();

router.post("/users", createUserController.handle);
router.post("/plants", createPlantController.handle);
router.post("/data", createHumidityController.handle);

export { router };
