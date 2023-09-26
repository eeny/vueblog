<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">VueBlog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">List</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Detail</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- <div>
    <h3 class="mt-3">VueBlog</h3>
    <p>Welcome!</p>
  </div> -->

  <router-link to="/">Home Page</router-link> <!-- a태그와 유사함 -->
  <router-link to="/list">List Page</router-link> <!-- a태그와 유사함 -->


  <!-- <List :contents = "contents"/> -->
  <div class="mt-4">
    <router-view :contents = "contents"></router-view> 
  </div>


</template>

<script>
// import List from './components/List.vue';
import contents from './assets/contents';

export default {
  name: 'App',
  data() {
    return {
      contents: contents,
    }
  },
  components: {
    // List : List,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
