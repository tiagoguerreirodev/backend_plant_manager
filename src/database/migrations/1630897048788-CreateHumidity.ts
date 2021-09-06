import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHumidity1630897048788 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "plant_humidity",
				columns: [
					{
						name: "id",
						type: "varchar",
						isPrimary: true,
					},
					{
						name: "humidity",
						type: "integer",
					},
					{
						name: "plant_id",
						type: "varchar",
					},
				],
				foreignKeys: [
					{
						name: "FKHumidityPlantID",
						referencedTableName: "plants",
						referencedColumnNames: ["id"],
						columnNames: ["plant_id"],
						onDelete: "SET NULL",
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("plant_humidity");
	}
}
