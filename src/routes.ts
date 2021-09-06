import { Router } from "express";
import { CreateHumidityController } from "./controllers/CreateHumidityController";
import { CreatePlantController } from "./controllers/CreatePlantController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListPlantCategoriesController } from "./controllers/ListPlantCategoriesController";

const router = Router();

const createUserController = new CreateUserController();
const createPlantController = new CreatePlantController();
const createHumidityController = new CreateHumidityController();
const listCategoriesController = new ListPlantCategoriesController();

router.post("/users", createUserController.handle);
router.post("/plants", createPlantController.handle);
router.post("/humidity", createHumidityController.handle);

router.get('/categories', listCategoriesController.handle);

export { router };
