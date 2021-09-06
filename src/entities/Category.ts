import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")
export class Category {
	@PrimaryGeneratedColumn()
	id: number;

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
