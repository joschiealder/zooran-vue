<template>
  <div class="zoogelaende">
    <div class="zoobanner">
      <h2>ZOO</h2>
    </div>
    <div class="zoogehege">
      <Gehege></Gehege>
      <Gehege></Gehege>
      <Gehege></Gehege>
    </div>
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
<style>
.zoogelaende {
  background-color: #a9a9a9;
  border: 5px solid #696969;
  margin: 50px;
  padding: 10px 0 50px 0;
}

.zoobanner {
  background-color: #696969;
  color: #ffffff;
  border-radius: 15px;
  margin: auto;
  width: 200px;
  height: 80px;
  position: relative;
  top: -80px;
}

.zoobanner h2 {
  padding-top: 12px;
  font-size: 40px;
}

.zoogehege {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
