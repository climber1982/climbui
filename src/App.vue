<template>
  <div id="app">
    <Header></Header>

    <router-view/>


  </div>
</template>


<script>
  import Header from "./components/Header";
  import LineList from "./components/LineList";
  import Login from "./components/Login";
  import RockMap from "./components/RockMap";
  export default {
    components: {Header,Login,RockMap,LineList}
  }
</script>
