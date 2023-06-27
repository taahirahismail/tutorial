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
    width: 100%;
    bottom: 0;
    left: 0;
    height: 90px;
    background-color: chocolate;
    padding: 5px;
}

.footer-text-left {
    font-size: 10px;
    word-spacing: 10px;
}

.menu {
    padding: 5px;
    color:darkslategrey;
    text-decoration: none;
}

.menu:hover {
    color: green;
    font-size: 12px;
}
</style>