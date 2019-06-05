<template>
  <div id="app" class="app">

    <div id="nav">
      <!-- TODO: verändere die Links so, dass sie die entsprechenden Views aufrufen -->
      <a>ZORANS ZOO</a>
      <a>ADMIN</a>
    </div>

    <router-view/>
  </div>
</template>

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
