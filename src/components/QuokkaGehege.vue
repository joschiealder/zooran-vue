<template>
  <div class="quokkagehege">
    <Quokka :name="'Quentin'"></Quokka>
    <div class="gehegebanner">
      <h3>Quokkas</h3>
    </div>
  </div>
</template>

<script>
  import Quokka from './Quokka';

  export default {
  name: 'QuokkaGehege',
  data: function () {
    return {
      quokkas: [
        {
          id: 0,
          name: 'Quentin'
        },
        {
          id: 1,
          name: 'Quinn'
        },
        {
          id: 2,
          name: 'Quirin'
        },
        {
          id: 3,
          name: 'Quincy'
        }
      ]
    }
  },

  components: {
    Quokka
  }
}
</script>

<style>
  .quokkagehege {
  margin: 5px 10px 40px 10px;
  padding: 10px;
  border: 3px solid #696969;
  width: 500px;
  height: auto;
    background-color: lightpink;
}

.gehegetiere {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.gehegebanner {
  background-color: #696969;
  color: #ffffff;
  border-radius: 0 0 10px 10px;
  margin: auto;
  width: 150px;
  height: 35px;
  position: relative;
  top: 45px;
}

.gehegebanner h3 {
  padding-top: 5px;
}
</style>
