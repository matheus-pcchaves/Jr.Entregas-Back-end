import { Cidade } from '../../Cities/models/Cidade';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'

@Entity("entregadores")
class Entregador{

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    cidade_id: string;

    @JoinColumn({name: "cidade_id"})
    @ManyToOne(() => Cidade)
    cidade: Cidade

    @Column()
    driver_license: string;

    @Column()
    vehicle_document: string;

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuidv4() 
        }
    }
}

export { Entregador }

//MIGRATION

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