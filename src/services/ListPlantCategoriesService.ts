import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

class ListCategoriesService {
	private categoriesRepository: ICategoriesRepository;

	constructor(categoriesRepository: ICategoriesRepository) {
		this.categoriesRepository = categoriesRepository;
	}

	async execute() {
		const categories = await this.categoriesRepository.all();

    return categories;
	}
}

export { ListCategoriesService };
