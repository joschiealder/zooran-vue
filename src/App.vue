<template>
  <div id="app" class="app">

    <div id="nav">
      <router-link to="/">LOGIN</router-link>
      <router-link to="/zoo">ZORANS ZOO</router-link>
      <router-link to="/admin">ADMIN</router-link>
      <button @click="logout">Logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { auth } from '@/api/firebase.js'
export default {
  name: 'Zoogelaende',
  methods: {
    logout: function () {
      auth.signOut().then(() => {
        alert('Du wurdest erfolgreich ausgeloggt!')
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}

#nav {
  background-color: #1D3400;
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding-top: 20px;
  font-size: larger;
  font-weight: bold;
}

#nav a {
  padding: 25px 10px;
  text-decoration: none;
}

#nav a:visited {
  color: #ffffff;
}

#nav a:hover {
  background-color: #CDF0A0;
  color: #1D3400;
}
</style>
