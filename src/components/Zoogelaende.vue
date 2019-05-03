<template>
  <div class="zoogelaende">
    <h2>Das ist das Zoogelaende</h2>
    <Gehege></Gehege>
  </div>
</template>

<script>
import Gehege from './Gehege'
export default {
  name: 'Zoogelaende',
  components: {
    Gehege
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zoogelaende {
  border: 1px solid black
}
</style>
