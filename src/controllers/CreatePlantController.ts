import { Request, Response } from "express";
import { PlantsRepository } from "../repositories/implementations/PlantsRepository";
import { CreatePlantService } from "../services/CreatePlantService";

class CreatePlantController {
	async handle(request: Request, response: Response) {
		const { id, owner_id, category_id } = request.body;

		const plantsRepository = new PlantsRepository();
		const createPlantService = new CreatePlantService(plantsRepository);

		await createPlantService.execute({ id, owner_id, category_id });

		return response.send();
	}
}

export { CreatePlantController };
