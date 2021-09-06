import { getRepository, Repository } from "typeorm";
import { Plant } from "../../entities/Plant";
import { ICreatePlantDTO, IPlantsRepository } from "../IPlantsRepository";

class PlantsRepository implements IPlantsRepository {
	private repository: Repository<Plant>;

	constructor() {
		this.repository = getRepository(Plant);
	}

	async create(data: ICreatePlantDTO): Promise<Plant> {
		const plant = new Plant();

		Object.assign(plant, data);

		const plantCreated = this.repository.create(plant);

		await this.repository.save(plantCreated);

		return plantCreated;
	}

	async findById(id: string): Promise<Plant> {
		return this.repository.findOne({ id });
	}

	async listAllFromUser(owner_id: string): Promise<Plant[]> {
		return this.repository.find({
			where: { owner_id },
			relations: ["CategoryID"],
		});
	}
}

export { PlantsRepository };
