import { v4 as uuidv4 } from 'uuid'

class Cidade {
    id?: string;
    name: string;
    state: string

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}

export { Cidade }