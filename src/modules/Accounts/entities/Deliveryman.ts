import { City } from '../../Cities/entities/City';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'

@Entity("deliverymans")
class Deliveryman{

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    city_id: string;

    @JoinColumn({name: "city_id"})
    @ManyToOne(() => City)
    city: City

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

export { Deliveryman }