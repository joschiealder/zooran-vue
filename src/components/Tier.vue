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
      <p>Name: {{vorname}}</p>
      <p>Art: {{art}}</p>
      <p>Alter: {{alter}}</p>
      <p> Futter: {{futter}}</p>
    </div>
  </div>
</template>

<script>
import strauss from '../assets/images/strauß.png'

export default {
  name: 'Tier',
  data () {
    return {
      vorname: 'Svenjay',
      nachname: 'Straussiansen',
      art: 'Strauss',
      alter: 5,
      futter: 'Bier',
      img: strauss
      // img: 'http://view.stern.de/de/picture/4049001/portrait-tier-vogel-lachen-lustig-strauss-augenblicke-1920.jpg'
    }
  },
  computed: {
    fullname: function () {
      return this.vorname + ' ' + this.nachname
    }
  }
}
</script>

<style scoped>
.tier {
  background-color: dimgrey;
  width: 220px;
  height: 100px;
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
