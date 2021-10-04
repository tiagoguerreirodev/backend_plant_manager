import { Request, Response } from "express";
import { HumiditiesRepository } from "../repositories/implementations/HumiditiesRepository";
import { CreateHumidityService } from "../services/CreateHumidityService";

class CreateHumidityController {
	async handle(request: Request, response: Response) {
		const { humidity, plant_id } = request.body;

		console.log(humidity, plant_id)

		const humiditiesRepository = new HumiditiesRepository();
		const createHumidityService = new CreateHumidityService(
			humiditiesRepository
		);

		await createHumidityService.execute({ humidity, plant_id });

		return response.send();
	}
}

export { CreateHumidityController };
