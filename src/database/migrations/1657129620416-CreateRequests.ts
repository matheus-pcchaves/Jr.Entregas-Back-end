import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRequests1657129620416 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "requests",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "item_description",
                        type: "varchar",
                    },
                    {
                        name: "address",
                        type: "varchar"
                    },
                    {
                        name: "city_id",
                        type: "uuid"
                    },
                    {
                        name: "payment_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKCityRequests",
                        referencedTableName: "cities",
                        referencedColumnNames: ["id"],
                        columnNames: ["city_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKPaymentsRequests",
                        referencedTableName: "payments",
                        referencedColumnNames: ["id"],
                        columnNames: ["payment_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("requests")
    }

}
