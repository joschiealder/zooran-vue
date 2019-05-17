<template>
  <div class="gehege">
    <div class="gehegetiere">
      <Tier v-for="animal in allAnimals" :name="animal.name" :age="animal.age" :food="animal.food" :lastname="animal.lastname" :type="animal.type" @loaded="loaded()"></Tier>
    </div>
    <div class="gehegebanner">
      <span>{{name}}</span>
      <span>({{amount}}/{{maxSize}})</span>
    </div>
  </div>
</template>

<script>
import Tier from './Tier'
import { db } from '@/api/firebase.js'

export default {
  name: 'Gehege',
  props: ['name', 'maxSize', 'animals'],
  components: {
    Tier
  },
  data () {
    return {
      allAnimals: [],
      amount: 0
    }
  },
  methods: {
    loaded: function() {
      this.$emit('loaded')
    }
  },
  mounted () {
    // Resolve Tiere reference
    this.animals.forEach((doc) => {
      const data = doc.path
      db.collection("Tiere").doc(doc.id).get()
      .then((snapshot) => {
        this.allAnimals.push(snapshot.data())
      })
      .then(() => {
        this.amount = this.allAnimals.length
      })
      .catch((error) => {
        console.log(error)
      })
    })
  }
}
</script>

<style>
.gehege {
  margin: 5px 10px 40px 10px;
  padding: 10px;
  border: 3px solid #696969;
  width: 500px;
  height: auto;
  background-color: #6E9B34;
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

.gehegebanner span:first-child{
  position: relative;
  top: 7px;
  font-size: large;
  padding: 5px;
}

.gehegebanner span:nth-child(2){
  position: relative;
  top: 6px;
  font-size: small;
  padding: 5px;
}
</style>
