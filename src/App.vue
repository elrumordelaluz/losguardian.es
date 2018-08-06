<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:300");
html {
  height: 100%;
  font-size: calc(1em + 1vw);
}
@media screen and (min-width: 50em) {
  html {
    font-size: 2vw;
  }
}
body {
  background-color: #5ec1c9;
  height: 100%;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
