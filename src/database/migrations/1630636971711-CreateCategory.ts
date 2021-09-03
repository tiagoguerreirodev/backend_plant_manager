import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategory1630636971711 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "categories",
				columns: [
					{
						name: "id",
						type: "integer",
						isPrimary: true,
						isGenerated: true,
					},
					{
						name: "name",
						type: "varchar",
					},
					{
						name: "description",
						type: "varchar",
					},
					{
						name: "image",
						type: "varchar",
					},
					{
						name: "water_per_sprinkle",
						type: "integer",
					},
					{
						name: "days_interval_per_sprinkle",
						type: "integer",
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("categories");
	}
}
