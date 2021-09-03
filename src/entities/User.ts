import { Column, Entity, PrimaryColumn } from "typeorm";
// import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
	@PrimaryColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	// constructor() {
	// 	if (!this.id) {
	// 		this.id = uuid();
	// 	}
	// }
}
