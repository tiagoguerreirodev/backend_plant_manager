import { Request, Response } from "express";
import { HumiditiesRepository } from "../repositories/implementations/HumiditiesRepository";
import { PlantsRepository } from "../repositories/implementations/PlantsRepository";
import { ListPlantHumidityService } from "../services/ListPlantHumidityService";

class ListPlantHumidityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { plant_id } = request.params;

    const humiditiesRepository = new HumiditiesRepository();
    const plantsRepository = new PlantsRepository();
    const listPlantHumidity = new ListPlantHumidityService(humiditiesRepository, plantsRepository);

    const humidities = await listPlantHumidity.execute(plant_id);
    
    return response.json(humidities);
  }
}

export { ListPlantHumidityController };