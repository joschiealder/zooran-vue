<template>
  <div class="tier">
    <div class="tierimage">
      <img id="animalImage" :src="imgUrl"/>
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
import { db, storage } from '@/api/firebase.js'
import placeholderImg from '../assets/images/nophoto.jpg'

export default {
  name: 'Tier',
  props: ['name', 'age', 'food', 'lastname', 'type'],
  data () {
    return {
      animalFood: 'Loading...',
      imgUrl: placeholderImg,
    }
  },
  computed: {
    fullname: function () {
      return this.name + ' ' + this.lastname
    }
  },
  mounted () {
    this.getFoods()
    this.getImages()
  },
  methods: {

    // TODO: Schreibe die Funktion, um Bilder dynamisch aus dem Cloud Storage zu laden
    getImages: function () {
      // let animalType = this.type.toLowerCase()
      // ?????????????????????????????????????????????????????????
      // .then((url) => {
      //   ?????????????????????
      // }).catch(function(error) {
      //   console.log(error)
      // })
    },

    getFoods: function () {
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
