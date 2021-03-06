import { Router } from "express";
import { CreateHumidityController } from "./controllers/CreateHumidityController";
import { CreatePlantController } from "./controllers/CreatePlantController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListPlantCategoriesController } from "./controllers/ListPlantCategoriesController";
import { ListPlantHumidityController } from "./controllers/ListPlantHumidityController";
import { ListPlantsFromUserController } from "./controllers/ListPlantsFromUserController";

const router = Router();

const createUserController = new CreateUserController();
const createPlantController = new CreatePlantController();
const createHumidityController = new CreateHumidityController();
const listCategoriesController = new ListPlantCategoriesController();
const listAvailablePlantFromUser = new ListPlantsFromUserController();
const listPlantHumidityController = new ListPlantHumidityController();

router.post("/users", createUserController.handle);
router.post("/plants", createPlantController.handle);
router.post("/humidity", createHumidityController.handle);

router.get("/categories", listCategoriesController.handle);
router.get("/plants/:owner_id", listAvailablePlantFromUser.handle);
router.get("/humidity/:plant_id", listPlantHumidityController.handle);

export { router };
