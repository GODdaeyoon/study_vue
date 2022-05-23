<template>
  <nav>
    <router-link to="/DataBinding">Data Binding</router-link> |
    <router-link to="/DataBingingInputText">DataBingingInputText</router-link> |
    <router-link to="/DataBingingInputNumber">DataBingingInputNumber</router-link> |
    <router-link to="/DataBingingTextarea">DataBingingTextarea</router-link> |
    <router-link to="/DataBingingSelect">DataBingingSelect</router-link> |
    <router-link to="/DataBingingCheckbox">DataBingingCheckbox</router-link> |
    <router-link to="/DataBingingCheckbox02">DataBingingCheckbox02</router-link> |
    <router-link to="/DataBingingRadio">DataBingingRadio</router-link> |
    <router-link to="/DataBingingAttribue">DataBingingAttribue</router-link> |
    <router-link to="/DataBingingButton">DataBingingButton</router-link> |
    <router-link to="/DataBingingClass">DataBingingClass</router-link> |
    <router-link to="/DataBingingClass2">DataBingingClass2</router-link> |
    <router-link to="/DataBingingStyle">DataBingingStyle</router-link> |
    <router-link to="/DataBingingList">DataBingingList</router-link> |
    <router-link to="/RenderingVif">RenderingVif</router-link> |
    <router-link to="/EventClick">EventClick</router-link> |
    <router-link to="/EventChange">EventChange</router-link> |
    <router-link to="/Computed">Computed</router-link> |
    <router-link to="/Watch">Watch</router-link> |
    <router-link to="/Watch2">Watch2</router-link> |
    <router-link to="/DataBingingList02">DataBingingList02</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
