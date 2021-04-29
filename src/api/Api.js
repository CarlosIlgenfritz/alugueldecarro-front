export default class Api {
    constructor(urlBaseDoRecurso) {
        this.urlBaseDoRecurso = urlBaseDoRecurso;
        this.enderecoDoEndPoint = process.env.VUE_APP_APONTAMENTO;
        this.UrlMontada
    }

    get urlMontada() {
        return this.enderecoDoEndPoint + this.urlBaseDoRecurso
    }
}