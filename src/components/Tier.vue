<template>
  <div class="tier">
    <div class="tierinfo">
      <p>Art: {{art}}</p>
      <p>Vorame: {{vorname.toUpperCase()}}</p>
      <p>Nachname: {{nachname}}</p>
      <p>Alter: {{alter}}</p>
      <p>Futter: {{futter}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Tier',
  data () {
    return {
      art: 'Strauss',
      futter: 'Straustern',
      vorname: 'Straussine',
      nachname: 'Straussiansen',
      alter: 5
    }
  }
}
</script>

<style scoped>
.tier {
  background-color: dimgrey;
  width: 220px;
  height: 130px;
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
