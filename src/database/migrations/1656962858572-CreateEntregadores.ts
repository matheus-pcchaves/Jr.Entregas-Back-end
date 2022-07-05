import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEntregadores1656962858572 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "entregadores",
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
                        name: "cidade_id",
                        type: "uuid"
                    },
                    {
                        name: "driver_license",
                        type: "varchar"
                    }, 
                    {
                        name: "vehicle_document",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("entregadores")
    }

}
