<template>
  <div class="zoo">
    <h1>Welcome to ZORANS ZOO </h1>
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
