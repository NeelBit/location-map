<script setup>

import { ref } from 'vue';
const year = ref(new Date().getFullYear());

</script>


<template>

<footer class="contenedor-footer">
    <div class="derechos-autor">
        <small class="footer__texto">Todos los derechos reservados {{year}}</small>
        <small class="footer__autor">By Neel</small>
    </div>

    <div class="redes-sociales">
        <div class="contenedor-icono">
            <a href="https://twitter.com/NeelBit" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00acee" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
            </a>
        </div>
        <div class="contenedor-icono">
            <a href="https://github.com/NeelBit" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#171515" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
            </a>
        </div>
    </div>
</footer>

</template>


<style scoped>

footer {
    background-color: var(--vt-c-indigo);

    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    padding: 1rem;
    color: var(--vt-c-white-mute);
}

@media (min-width: 480px) {
    footer {
        flex-direction: row;
    }
}

.derechos-autor {
    display: flex;
    flex-direction: column;
    justify-items: center;
}

.contenedor-footer small {
    font-size: 1.6rem;
}

.footer__texto,
.footer__autor {
    margin: .2rem auto;
    text-align: center;
}

.redes-sociales {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--separacion);
}

.contenedor-icono {
    padding: .5rem;
}

.contenedor-icono a {
    cursor: pointer;
    /* box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75); */
    box-shadow: 0px 0px 10px 0px var(--vt-c-white-soft);
    border-radius: 50%;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--vt-c-white-soft);
}

.contenedor-icono a:hover {
    /* transform: rotate(0.5turn); */
    /* transform: rotate(360deg); */
    /* transform: translate3d(2px, 10%, 3em); */

    /* animation: icono 2.5s; */
}

.contenedor-icono:hover {
    /* transform: rotate(0.5turn); */
    /* transform: rotate(360deg); */
    /* transform: translate3d(2px, 10%, 3em); */

    animation: icono 1s linear infinite .25s;
}

@keyframes icono {
    from {
        transform: rotate3d(0, 0, 0, 0);
    }

    to {
        transform: rotate3d(0, 1, 0, 360deg);
    }
}

</style>