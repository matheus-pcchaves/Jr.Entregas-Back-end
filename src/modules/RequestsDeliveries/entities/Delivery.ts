import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"
import { Deliveryman } from "../../Accounts/entities/Deliveryman";
import { City } from "../../Cities/entities/City";
import { Requests } from "./Requests";

@Entity("deliveries")
class Delivery {
    @PrimaryColumn()
    id?: string;

    @Column()
    request_id: string;

    @ManyToOne(() => Requests)
    @JoinColumn({name: "request_id"})
    request: Requests;

    @Column()
    city_id: string;

    @ManyToOne(() => City)
    @JoinColumn({name: "city_id"})
    city: City

    @Column()
    deliveryman_id: string;

    @ManyToOne(() => Deliveryman)
    @JoinColumn({name: "deliveryman_id"})
    deliveryman: Deliveryman;

    @Column()
    expected_finish_date: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}

export { Delivery }