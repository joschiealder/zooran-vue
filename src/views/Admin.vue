<template>
  <div class="container">
    <div class="admin">
      <h1>Tier hinzufügen</h1>

      <div class="animal">
        <label for="name">Tier auswählen: </label>
        <select id="animal" v-model="animal">
          <option>Quokka</option>
          <option>Dromedar</option>
          <option>Strauss</option>
        </select>
      </div>
      <br/>
      <div class="name">
        <label for="name">Name: </label>
        <input type="text" placeholder="Name" id="name" v-model="name">
      </div>

      <div class="radio">
        <input type="radio" value="male" id="male" v-model="sex"/>
        <label for="male">Männlich</label>
        <input type="radio" value="female" id="female" v-model="sex"/>
        <label for="female">weiblich</label>
      </div>

      <button v-on:click="add">hinzufügen</button>

    </div>

  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      name: '',
      animal: '',
      sex: ''
    }
  },
  methods: {
    add: function (event) {
      alert(this.animal + ', ' + this.name + ', ' + this.sex + ' wurde erstellt. :)')
    }
  }
}
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .admin {
    background-color: #ffffff;
    width: auto;
    position: absolute;
    top: 70px;
    left: 0;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

  }
</style>
