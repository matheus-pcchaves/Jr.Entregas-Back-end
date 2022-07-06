import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'

@Entity("payments")
class Payment {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    format: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}

export { Payment }