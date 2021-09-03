import { Plant } from "../../entities/Plant";
import {
	ICreatePlantDTO,
	IPlantsRepository,
} from "../../repositories/IPlantsRepository";

export class PlantsRepositoryMock implements IPlantsRepository {
	private plants: Plant[];

	constructor() {
		this.plants = [];
	}

	async create(data: ICreatePlantDTO): Promise<void> {
		const plant = new Plant();

		Object.assign(plant, data);

		this.plants.push(plant);
	}

	async findById(id: string): Promise<Plant> {
		return this.plants.find((plant) => plant.id === id);
	}
}
