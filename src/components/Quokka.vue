<template>
  <div class="tier">
    <div class="tierimage">
      <img :src="img"/>
    </div>
    <div class="tierinfo">
      <p>Name: {{name}}</p>
    </div>
  </div>
</template>

<script>
  import quokka from '../assets/images/quokka.png'

  export default {
  name: 'Quokka',
    props: {
      'name': String
  },
  data () {
    return {
      img: quokka
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
