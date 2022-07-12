import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDeliveries1657571105258 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "deliveries",
                columns: [
                    {name: "id", type: "uuid", isPrimary: true},
                    {
                        name: "request_id",
                        type: "uuid"
                    }, 
                    {
                        name: "city_id",
                        type: "uuid"
                    },
                    {
                        name: "deliveryman_id",
                        type: "uuid"
                    },
                    {
                        name: "start_date",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "end_date",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "expected_finish_date",
                        type: "timestamp"
                    },
                    {
                        name: "total",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKCity",
                        referencedTableName: "cities",
                        referencedColumnNames: ["id"],
                        columnNames: ["city_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKRequests",
                        referencedTableName: "requests",
                        referencedColumnNames: ["id"],
                        columnNames: ["request_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKDeliveryman",
                        referencedTableName: "deliverymans",
                        referencedColumnNames: ["id"],
                        columnNames: ["deliveryman_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }          
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("deliveries")
    }

}
