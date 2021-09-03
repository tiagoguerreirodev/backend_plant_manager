import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("categories")
export class Category {
	@PrimaryColumn()
	readonly id: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	image: string;

	@Column()
	water_per_sprinkle: Number;

	@Column()
	days_interval_per_sprinkle: Number;
}
