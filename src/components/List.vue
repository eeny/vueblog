<template>
  <div v-for="obj, idx in contents" :key="obj">
    <!--  #route.params.id      $route는 현재경로 / $router는 페이지 이동관련 기능 -->
    <!-- $router.go(-2) 이런 것도 가능 -->
    <h5 @click="$router.push('/detail/' + idx)">{{ contents[idx].title }}</h5>
    <p>{{ contents[idx].date }}</p>
  </div>
  <!-- <div>
    <h5>{{ contents[1].title }}</h5>
    <p>{{ contents[1].date }}</p>
  </div>
  <div>
    <h5>{{ contents[2].title }}</h5>
    <p>{{ contents[2].date }}</p>
  </div> -->
</template>

<script>
export default {
    name : 'List',
    props : {
        contents : Array,
    },
}
</script>

<style>

</style>