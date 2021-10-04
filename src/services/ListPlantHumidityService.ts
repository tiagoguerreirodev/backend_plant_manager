import { Humidity } from "../entities/Humidity";
import { AppError } from "../errors/AppError";
import { IHumidityRepository } from "../repositories/IHumidityRepository";
import { IPlantsRepository } from "../repositories/IPlantsRepository";

class ListPlantHumidityService {
  private humiditiesRepository: IHumidityRepository;
  private plantsRepository: IPlantsRepository;

  constructor(humiditiesRepository: IHumidityRepository, plantsRepository: IPlantsRepository) {
    this.humiditiesRepository = humiditiesRepository;
    this.plantsRepository = plantsRepository;
  }
  
  async execute(plant_id: string): Promise<Humidity[]> {
    const foundPlant = await this.plantsRepository.findById(plant_id);

    if (!foundPlant) {
      throw new AppError('Invalid plant id.')
    }

    const plantHumidity = await this.humiditiesRepository.getRecentById(plant_id);

    return plantHumidity;
  }
}

export { ListPlantHumidityService };