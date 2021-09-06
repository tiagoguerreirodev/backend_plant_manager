import { Humidity } from "../entities/Humidity";

export interface ICreateHumidityDTO {
	humidity: number;
	plant_id: string;
}

export interface IHumidityRepository {
	create(data: ICreateHumidityDTO): Promise<void>;
	findById(id: string): Promise<Humidity | undefined>;
}
