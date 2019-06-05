<template>
  <div class="zoogelaende">
    <div class="zoobanner">
      <h2>ZOO</h2>
      <div v-if="loading" class="sk-circle">
        <div class="sk-circle1 sk-child"></div>
        <div class="sk-circle2 sk-child"></div>
        <div class="sk-circle3 sk-child"></div>
        <div class="sk-circle4 sk-child"></div>
        <div class="sk-circle5 sk-child"></div>
        <div class="sk-circle6 sk-child"></div>
        <div class="sk-circle7 sk-child"></div>
        <div class="sk-circle8 sk-child"></div>
        <div class="sk-circle9 sk-child"></div>
        <div class="sk-circle10 sk-child"></div>
        <div class="sk-circle11 sk-child"></div>
        <div class="sk-circle12 sk-child"></div>
      </div>
    </div>
    <div :class="{'loading' : loading, 'zoogehege' : !loading }">
      <Gehege v-for="gehege in alleGehege" :name="gehege.name" :maxSize="gehege.maxSize" :animals="gehege.animals" @loaded="loaded()"></Gehege>
    </div>
  </div>
</template>

<script>
import Gehege from './Gehege'
import { db } from '@/api/firebase.js'

export default {
  name: 'Zoogelaende',
  components: {
    Gehege
  },
  data () {
    return {
      alleGehege: [],
      loading: true
    }
  },
  methods: {
    loaded: function () {
      this.loading = false
    }
  },
  mounted () {
    // TODO: Beziehe die Gehege aus dem Cloud Firestore (Datenbank)
    db.collection("Gehege").get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        this.alleGehege.push(doc.data())
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/styles/spinner.css';

.loading {
  display: none;
}

.zoogelaende {
  background-color: #a9a9a9;
  border: 5px solid #696969;
  margin: 50px;
  padding: 10px 0 50px 0;
}

.zoobanner {
  background-color: #696969;
  color: #ffffff;
  border-radius: 15px;
  margin: auto;
  width: 200px;
  height: 80px;
  position: relative;
  top: -80px;
}

.zoobanner h2 {
  padding-top: 12px;
  font-size: 40px;
}

.zoogehege {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
