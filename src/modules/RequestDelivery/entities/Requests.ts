import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'
import { City } from '../../Cities/entities/City';
import { Payment } from '../../Payments/entities/Payment';

@Entity("requests")
class Requests {

    @PrimaryColumn()
    id?: string;

    @Column()
    item_description: string;

    @Column()
    address: string;

    @Column()
    city_id: string;

    @JoinColumn({name: "city_id"})
    @ManyToOne(() => City)
    city: City

    @Column()
    payment_id: string;

    @JoinColumn({name: "payment_id"})
    @ManyToOne(() => Payment)
    payment: Payment

    @Column()
    isPending?: boolean

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuidv4() 
            this.isPending = true
        }
    }
}

export { Requests }