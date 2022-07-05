import { v4 as uuidv4 } from 'uuid'

class Pedidos {
    id?: string;
    endereco: string;
    cidade: string;
    cpfcnpj: string;
    pagamento: string;
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuidv4() 
        }
    }
}

export { Pedidos }