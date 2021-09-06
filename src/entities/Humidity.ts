import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Plant } from "./Plant";
import { v4 as uuid } from "uuid";

@Entity("plant_humidity")
export class Humidity {
	@PrimaryColumn()
	readonly id: string;

	@Column()
	humidity: number;

	@Column()
	plant_id: string;

	@JoinColumn({ name: "plant_id" })
	@ManyToOne(() => Plant)
	PlantID: Plant;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
