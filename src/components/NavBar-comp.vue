<template>
    <nav class="topnav">
        <router-link class="active" to="/">Home</router-link>
        <router-link to="/">Tutorials</router-link>
        <router-link to="/">About</router-link>
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

router-link {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}
</style>