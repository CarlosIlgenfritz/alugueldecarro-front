import axios from 'axios'
import Api from './Api';

export default class ClienteApi extends Api {

    constructor() {
        super('/cliente')
    }


    salvarCliente(clienteDto) {
        return axios.post(`${this.urlMontada}`, {
            clienteDto
        })
    }
}