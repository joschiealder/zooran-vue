<template>
  <div class="quokkagehege">
    <div class="gehegetiere">
      <div v-bind:key="quokka.id" v-for="quokka in quokkas">
          <Quokka family="Känguru" :name="quokka.name"
                   :info="quokka.info"
                    v-on:set-main-quokka="mainQuokka = $event"
          >
            <h4>{{quokka.info.description}}</h4>
          </Quokka>
      </div>
    </div>
    <div class="gehegebanner">
      <h3>Quokkas - Anführer: {{mainQuokka}}</h3>
    </div>
  </div>
</template>

<script>
import Quokka from './Quokka'

export default {
  name: 'QuokkaGehege',
  data: function () {
    return {
      mainQuokka: '',
      quokkas: [
        {
          id: 0,
          name: 'Quentin',
          info: {
            sex: 'male',
            description: 'lorem ipsum'
          }
        },
        {
          id: 1,
          name: 'Quinn',
          info: {
            sex: 'male',
            description: 'dolor sit'
          }
        },
        {
          id: 2,
          name: 'Quirin',
          info: {
            sex: 'male',
            description: 'amet'
          }
        },
        {
          id: 3,
          name: 'Quincy',
          info: {
            sex: 'male',
            description: 'leider verstorben :('
          }
        }
      ]
    }
  },
  methods: {
    remove: function (id) {
      for (let i = 0; i < this.quokkas.length; i++) {
        if (this.quokkas[i].id === id) {
          this.quokkas.splice(i, 1)
        }
      }
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
    width: 350px;
    height: 35px;
    position: relative;
    top: 45px;
  }

  .gehegebanner h3 {
    padding-top: 5px;
  }
</style>
