import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,
	UpdateDateColumn,
} from "typeorm";
import { Category } from "./Category";
import { User } from "./User";

@Entity("plants")
export class Plant {
	@PrimaryColumn()
	id: string;

	@Column()
	category_id: number;

	@JoinColumn({ name: "category_id" })
	@ManyToOne(() => Category)
	CategoryID: Category;

	@Column()
	owner_id: string;

	@JoinColumn({ name: "owner_id" })
	@ManyToOne(() => User)
	OwnerID: User;

	@UpdateDateColumn()
	updated_at: Date;
}
