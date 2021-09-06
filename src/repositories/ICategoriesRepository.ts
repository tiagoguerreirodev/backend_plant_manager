import { Category } from "../entities/Category";

export interface ICategoriesRepository {
  all: () => Promise<Category[]>
}