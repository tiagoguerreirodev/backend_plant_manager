import { Humidity } from "../entities/Humidity";

export interface ICreateHumidityDTO {
	humidity: number;
	plant_id: string;
}

export interface IHumidityRepository {
	create(data: ICreateHumidityDTO): Promise<void>;
	getRecentById(id: string): Promise<Humidity[]>;
}
