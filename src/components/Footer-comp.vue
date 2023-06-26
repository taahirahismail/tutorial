<template>
    <div class="footer">
        <h6>Footer</h6>
        <p class="footer-text-left">
            <router-link class="menu" to="/">Home</router-link>
            <router-link class="menu" to="/">Tutorials</router-link>
            <router-link class="menu" to="/">About</router-link>
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 90px;
    background-color: chocolate;
}

.footer-text-left {
    font-size: 25px;
    padding-left: 40px;
    float: left;
    word-spacing: 20px;
}

.menu:hover {
    background-color: yellowgreen;
    font-size: 20px;
}
</style>