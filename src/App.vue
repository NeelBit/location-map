<script setup>
import Footer from './components/Footer.vue';
import Mapa from './components/Mapa.vue';
import Users from './components/Users.vue';



</script>


<template>
    <header>

        <h2>Location Map (GPS y LeaFlet) & drag and drop</h2>

    </header>

    <main class="contenedor">

        <Mapa />

        <Users />

    </main>

    <Footer />
</template>


<style scoped>



</style>
