<template>
  <div class="tier">
    <b>Ich bin ein Tier</b>
    <p> {{fullname}}</p>
    <p>Vorame: {{vorname}}</p>
    <p>Nachname: {{nachname}}</p>
    <p>Art: {{art}}</p>
    <p>Alter: {{alter}}</p>
    <p> Futter: {{futter}}</p>
    <img :src="img"/>
  </div>
</template>

<script>
export default {
  name: 'Tier',
  data () {
    return {
      vorname: 'Svenjay',
      nachname: 'Straussiansen',
      art: 'Strauss',
      alter: 5,
      futter: 'Bier',
      img: 'http://view.stern.de/de/picture/4049001/portrait-tier-vogel-lachen-lustig-strauss-augenblicke-1920.jpg'
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
  border: 1px solid lightgray;
}
img {
  height: 200px;
  width: 200px;
}
</style>
