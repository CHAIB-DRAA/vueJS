<template>
  <div class="navbar-nav app">
    <ul>
      <li>
        <router-link to="/"> Home  </router-link>
      </li>
      <li><router-link to="/articles">Articles</router-link>
      </li>
      <li><router-link to="/add"> Add </router-link>
      </li>
      
    </ul>
  </div>
  <router-view/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul{
  display: flex;
 
  text-align: center;
  list-style: none;
}
</style>
