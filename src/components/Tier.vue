<template>
  <div class="tier">
    <div class="tierimage">
      <img :src="img"/>
    </div>
    <div class="tierinfo">
      <!--
      <p> {{fullname}}</p>
      <p>Vorame: {{vorname}}</p>
      <p>Nachname: {{nachname}}</p>
      -->
      <p>Name: {{fullname}}</p>
      <p>Art: {{type}}</p>
      <p>Alter: {{age}}</p>
      <p>Futter: {{animalFood}}</p>
    </div>
  </div>
</template>

<script>
import strauss from '../assets/images/strauß.png'
import { db } from '@/api/firebase.js'

export default {
  name: 'Tier',
  props: ['name', 'age', 'food', 'lastname', 'type'],
  data () {
    return {
      animalFood: 'Loading...',
      img: strauss,
      // img: 'http://view.stern.de/de/picture/4049001/portrait-tier-vogel-lachen-lustig-strauss-augenblicke-1920.jpg'
    }
  },
  computed: {
    fullname: function () {
      return this.name + ' ' + this.lastname
    }
  },
  mounted () {
    // Resolve Futter reference
    db.collection("Futter").doc(this.food.id).get()
    .then((snapshot) => {
      this.animalFood = snapshot.data().name
      this.$emit('loaded')
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
.tier {
  background-color: dimgrey;
  width: 220px;
  min-height: 100px;
  display: inline-grid;
  grid-column-gap: 5px;
  margin: 5px;
}

.tierimage {
  grid-column: 1/2;
  justify-content: center;
  align-items: center;
}

.tierimage img {
  margin: 5px;
  height: 90px;
  width: 90px;
}

.tierinfo {
  grid-column: 2/2;
  align-items: start;
  text-align: start;
}

.tierinfo p {
  font-size: smaller;
  margin: 5px;
}
</style>
