<template>
  <div class="gehege">
    <div class="gehegetiere">
      <Tier></Tier>
      <Tier></Tier>
      <Tier></Tier>
    </div>
    <div class="gehegebanner">
      <h3>Gehege</h3>
    </div>
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

<style>
.gehege {
  margin: 5px 10px 40px 10px;
  padding: 10px;
  border: 3px solid #696969;
  width: 500px;
  height: auto;
  background-color: #6E9B34;
}

.gehegetiere {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.gehegebanner {
  background-color: #696969;
  color: #ffffff;
  border-radius: 0 0 10px 10px;
  margin: auto;
  width: 150px;
  height: 35px;
  position: relative;
  top: 45px;
}

.gehegebanner h3 {
  padding-top: 5px;
}
</style>
