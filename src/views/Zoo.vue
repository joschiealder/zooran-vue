<template>
  <div class="zoo">
    <Zoogelaende></Zoogelaende>
  </div>
</template>

<script>
// @ is an alias to /src
import Zoogelaende from '../components/Zoogelaende.vue'

export default {
  name: 'Zoo',
  components: {
    Zoogelaende
  }
}

</script>

<style>
.zoo {
  background-color: #ffffff;
  width: 100%;
  position: absolute;
  top: 70px;
  left: 0;
  overflow: scroll;
}
</style>
