<template>
    <nav class="topnav">
        <router-link class="active routerlink" to="/">Home</router-link>
        <router-link class="routerlink" to="/tutorials">Tutorials</router-link>
        <router-link class="routerlink" to="/about">About</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.topnav {
    background-color: #333;
    overflow: hidden;
}

.routerlink {
    float: center;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

.routerlink:hover {
    color: yellowgreen;
}
</style>