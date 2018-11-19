<template>
  <div id="app">
    <img id="logo" src="./assets/beit.png">
    <h1>BEIT Academy</h1>
    <div id="nav">
     <router-link :to="{name: 'form'}" id="link1">Seminar Registration</router-link>
     <router-link :to="{name: 'registrations'}" id="link2">Registrations</router-link>
     <hr>
     </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  text-align: left;
  margin-top: 15px;
  margin-left: 10px;
}
#link1, #link2 {
  color: #0e4094;
  padding: 10px;
  border: 1px solid;
  border-color: #e5e5e5;
  border-radius: 7px;
}
</style>