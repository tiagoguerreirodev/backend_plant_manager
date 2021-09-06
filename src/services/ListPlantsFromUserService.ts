import { IPlantsRepository } from "../repositories/IPlantsRepository";

class ListPlantsFromUserService {
	private plantsRepository: IPlantsRepository;

	constructor(plantsRepository: IPlantsRepository) {
		this.plantsRepository = plantsRepository;
	}

	async execute(owner_id) {
		const plants = await this.plantsRepository.listAllFromUser(owner_id);

		return plants;
	}
}

export { ListPlantsFromUserService };
