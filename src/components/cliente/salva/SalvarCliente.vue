<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Nome Completo:</label>
            <input
              type="text"
              class="form-control"
              id="nomeCompleto"
              aria-describedby="Nome Completo"
              placeholder="Digite seu nome completo:"
              v-model="nomeCompleto"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email:</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Digite seu email"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">CPF</label>
            <input
              type="text"
              class="form-control"
              id="cpfInput"
              placeholder="Digite seu CPF"
              v-model="cpf"
            />
          </div>
          <button type="button" class="btn btn-primary" @click="enviar">
            Enviar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ClienteApi from '@/api/ClienteApi'
export default {
  data() {
    return {
      nomeCompleto: "",
      email: "",
      cpf: "",
      clienteApi = new ClienteApi()
    };
  },
  methods: {
    enviar() {
      let clienteDto = {
          nomeCompleto: this.nomeCompleto,
          email: this.email,
          cpf: this.cpf,
      }
     ClienteApi.salvarCliente(clienteDto).then(response =>{
       console.log(response)
     }).catch(erro =>{
       console.log(erro)
     })
    }
  },
}
</script>

<style>
</style>