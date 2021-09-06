import { Request, Response } from "express";
import { PlantsRepository } from "../repositories/implementations/PlantsRepository";
import { ListPlantsFromUserService } from "../services/ListPlantsFromUserService";

export class ListPlantsFromUserController {
	async handle(request: Request, response: Response) {
		const { owner_id } = request.params;
		const plantsRepository = new PlantsRepository();
		const listAvailablePlantFromUser = new ListPlantsFromUserService(
			plantsRepository
		);

		const plantsFromUser = await listAvailablePlantFromUser.execute(owner_id);

		return response.json(plantsFromUser);
	}
}
