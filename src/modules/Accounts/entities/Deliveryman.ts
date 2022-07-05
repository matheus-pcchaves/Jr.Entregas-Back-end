import { v4 as uuidv4 } from 'uuid'

class Deliveryman{

    id?: string;
    name: string;
    email: string;
    password: string;
    cidade_id: string;
    cidade: string
    driver_license: string;
    vehicle_document: string;
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuidv4() 
        }
    }
}

export { Deliveryman }