import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
	private repository: Repository<Category>;

	constructor() {
		this.repository = getRepository(Category);
	}

	async all(): Promise<Category[]> {
		return this.repository.find();
	}
}

export { CategoriesRepository };
