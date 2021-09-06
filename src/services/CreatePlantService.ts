import { AppError } from "../errors/AppError";
import { IPlantsRepository } from "../repositories/IPlantsRepository";

interface ICreatePlantRequest {
	id: string;
	owner_id: string;
	category_id: number;
}

class CreatePlantService {
	private plantsRepository: IPlantsRepository;

	constructor(plantsRepository: IPlantsRepository) {
		this.plantsRepository = plantsRepository;
	}

	async execute({ id, owner_id, category_id }: ICreatePlantRequest) {
		const plantAlreadyExists = await this.plantsRepository.findById(id);

		if (plantAlreadyExists) {
			throw new AppError("Plant already exists.");
		}

		const plant = await this.plantsRepository.create({
			id,
			owner_id,
			category_id,
		});

		return plant;
	}
}

export { CreatePlantService };
