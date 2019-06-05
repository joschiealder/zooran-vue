<template>
  <div class="container">
    <div class="admin">
      <h1>Tier hinzufügen</h1>

      <div class="animal">
        <label for="name">Tier auswählen: </label>
        <select id="animal">
          <option>Quokka</option>
          <option>Dromedar</option>
          <option>Strauss</option>
        </select>
      </div>
      <br/>
      <div class="name">
        <label for="name">Name: </label>
        <input type="text" placeholder="Name" id="name">
      </div>

      <div class="radio">
        <input type="radio" value="male" id="male"/>
        <label for="male">Männlich</label>
        <input type="radio" value="female" id="female"/>
        <label for="female">weiblich</label>
      </div>

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
      alert('TODO' + ' wurde erstellt. :)')
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
