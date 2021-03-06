import { Plant } from "../entities/Plant";

export interface ICreatePlantDTO {
	id: string;
	owner_id: string;
	category_id: number;
}

export interface IPlantsRepository {
	create(data: ICreatePlantDTO): Promise<Plant>;
	findById(id: string): Promise<Plant | undefined>;
	listAllFromUser(owner_id: string): Promise<Plant[]>;
}
