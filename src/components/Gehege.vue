<template>
  <div class="gehege">
    <h3>Das ist ein Gehege.</h3>
    <Tier></Tier>
  </div>
</template>

<script>
import Tier from './Tier'
export default {
  name: 'Gehege',
  components: {
    Tier
  }
}
</script>

<style scoped>
.gehege {
  border: 1px solid grey;
}
</style>
