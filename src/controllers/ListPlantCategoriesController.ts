import { Request, Response } from "express";
import { CategoriesRepository } from "../repositories/implementations/CategoriesRepository";
import { ListCategoriesService } from "../services/ListPlantCategoriesService";

export class ListPlantCategoriesController {
  async handle(request: Request, response: Response) {
    const categoriesRepository = new CategoriesRepository()
    const listAvailablePlantCategories = new ListCategoriesService(categoriesRepository);

    const plantCategories = await listAvailablePlantCategories.execute();

    return response.json(plantCategories);
  }
}