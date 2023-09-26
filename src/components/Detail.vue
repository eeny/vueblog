<template>
    {{ $route.params.id }}
    <h3>Detail Page</h3>
    <h5>{{ contents[$route.params.id].title }}</h5>
    <p>{{ contents[$route.params.id].content }}</p>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'Detail',
    props: {
        contents : Array,
    },
}
</script>

<style>

</style>