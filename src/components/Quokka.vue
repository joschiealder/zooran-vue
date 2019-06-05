<template>
  <div class="tier">
    <div class="tierimage">
      <img :src="img"/>
    </div>
    <div class="tierinfo">
      <p>Name: {{name}}</p>
      <p>Familie: {{family}}</p>
      <p>Geschlecht: {{info.sex === 'female' ? 'weiblich' : 'männlich'}}</p>
      <slot></slot>
      <button v-on:click="($emit('set-main-quokka', name))">als Anführer bestimmen</button>
    </div>
  </div>
</template>

<script>
import quokka from '../assets/images/quokka.png'

export default {
  name: 'Quokka',
  props: {
    'family': String,
    'name': String,
    info: { sex: String }
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
  width: 280px;
  height: 170px;
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
