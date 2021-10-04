import { getRepository, Repository } from "typeorm";
import { Humidity } from "../../entities/Humidity";
import {
	ICreateHumidityDTO,
	IHumidityRepository,
} from "../IHumidityRepository";

class HumiditiesRepository implements IHumidityRepository {
	private repository: Repository<Humidity>;

	constructor() {
		this.repository = getRepository(Humidity);
	}

	async create(data: ICreateHumidityDTO): Promise<void> {
		const humidity = new Humidity();

		Object.assign(humidity, data);

		const humidityCreated = this.repository.create(humidity);

		await this.repository.save(humidityCreated);
	}

	async getRecentById(id: string): Promise<Humidity[]> {
		const humidity = await this.repository.find({ plant_id: id });

		if (humidity.length > 30) {
			return humidity.slice(30);
		}

		return humidity;
	}
}

export { HumiditiesRepository };
