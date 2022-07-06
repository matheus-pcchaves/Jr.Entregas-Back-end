import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDeliverymans1657031002294 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "deliverymans",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, 
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    }, 
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "city_id",
                        type: "uuid"
                    },
                    {
                        name: "driver_license",
                        type: "varchar"
                    }, 
                    {
                        name: "vehicle_license",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKCityDeliveries",
                        referencedTableName: "cities",
                        referencedColumnNames: ["id"],
                        columnNames: ["city_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("deliverymans")
    }

}
