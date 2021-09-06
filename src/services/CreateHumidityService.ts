import { IHumidityRepository } from "../repositories/IHumidityRepository";

interface ICreateHumidityRequest {
	humidity: number;
	plant_id: string;
}

class CreateHumidityService {
	private humiditiesRepository: IHumidityRepository;

	constructor(humiditiesRepository: IHumidityRepository) {
		this.humiditiesRepository = humiditiesRepository;
	}

	async execute({ humidity, plant_id }: ICreateHumidityRequest) {
		const humidityCreated = await this.humiditiesRepository.create({
			humidity,
			plant_id,
		});

		return humidityCreated;
	}
}
export { CreateHumidityService };
