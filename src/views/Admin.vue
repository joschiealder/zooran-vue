<template>
  <div class="admin">
    <h1>Welcome to the Admin Interface</h1>
    <label for="name">Name: </label>
    <input type="text" id="name" v-model="name">
    <br>
    <button @click="addQuokka">Quokka hinzufügen</button>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    addQuokka () {
      let id = this.$store.state.quokkas.length
      let quokka = { id, name: this.name }
      // TODO: c) Rufe die Mutation "addQuokka" auf und übergebe ihr das quokka Objekt
    }
  }
}
</script>

<style>
.admin {
  background-color: #ffffff;
  width: 100%;
  position: absolute;
  top: 70px;
  left: 0;
  overflow: scroll;
}
</style>
