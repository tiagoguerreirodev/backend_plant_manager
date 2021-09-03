import { AppError } from "../errors/AppError";
import { IPlantsRepository } from "../repositories/IPlantsRepository";

interface ICreatePlantRequest {
	id: string;
	name: string;
	owner_id: string;
	category_id: number;
}

class CreatePlantService {
	private plantsRepository: IPlantsRepository;

	constructor(plantsRepository: IPlantsRepository) {
		this.plantsRepository = plantsRepository;
	}

	async execute({ id, name, owner_id, category_id }: ICreatePlantRequest) {
		const plantAlreadyExists = await this.plantsRepository.findById(id);

		if (plantAlreadyExists) {
			throw new AppError("Plant already exists.");
		}

		await this.plantsRepository.create({
			id,
			name,
			owner_id,
			category_id,
		});
	}
}

export { CreatePlantService };
