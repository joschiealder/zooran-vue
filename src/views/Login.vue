<template>
  <div class="login">
    <h1>Welcome to the Login</h1>
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { auth } from '@/api/firebase.js'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    // TODO: Schreibe die Login-Funktion
    login: function() {
      // ?????????????????????
      // .then(() => {
      //     alert('Gut gemacht. Du bist nun eingeloggt!')
      //     this.$router.replace('zoo')
      //   },
      //   function(err) {
      //     alert('Da ist etwas schief gelaufen: ' + err.message)
      //   }
      // );
    }
  }
}
</script>

<style>
.login {
  background-color: #ffffff;
  width: 100%;
  position: absolute;
  top: 70px;
  left: 0;
  overflow: scroll;
}

.login input {
  margin-bottom: 25px;
}
</style>
