import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterDeliverymanColumn1657117491412 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('deliverymans', 'vehicle_license');
        await queryRunner.addColumn('deliverymans', new TableColumn({
            name: 'vehicle_document',
            type: 'varchar'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('deliverymans', new TableColumn({
            name: 'vehicle_license',
            type: 'varchar'
        }))

        await queryRunner.dropColumn('deliverymans', 'vehicle_document');
    }

}
