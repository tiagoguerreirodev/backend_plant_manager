import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlant1630686307568 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "plants",
				columns: [
					{
						name: "id",
						type: "varchar",
						isPrimary: true,
					},
					{
						name: "category_id",
						type: "integer",
					},
					{
						name: "owner_id",
						type: "varchar",
					},
					{
						name: "updated_at",
						type: "timestamp",
						default: "now()",
					},
				],
				foreignKeys: [
					{
						name: "FKPlantCategoryID",
						referencedTableName: "categories",
						referencedColumnNames: ["id"],
						columnNames: ["category_id"],
						onDelete: "SET NULL",
						onUpdate: "SET NULL",
					},
					{
						name: "FKPlantOwnerID",
						referencedTableName: "users",
						referencedColumnNames: ["id"],
						columnNames: ["owner_id"],
						onDelete: "SET NULL",
						onUpdate: "SET NULL",
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("plants");
	}
}
