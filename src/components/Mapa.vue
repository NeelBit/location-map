<script setup>
import { onMounted, ref, watch } from 'vue';
import L from 'leaflet';
import { useUbicacionMapStore } from '../stores/UbicacionMap';

const store = useUbicacionMapStore();

const map = ref();
const mapContainer = ref();

const inputLat = ref(0);
const inputLng = ref(0);

onMounted(() => {
    map.value = L.map(mapContainer.value).setView([store.latitude, store.longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map.value);
})

watch(() => store.latitude, (newValue) => {
    map.value.setView([newValue, store.longitude], 13);
    //console.log(newValue);
})

//const ubicacion = ref({ lat: -34.60376, lng: -58.38162 });

function getLocation() {
    if (navigator.geolocation) {
            // watchPosition sigue (GPS), y location es la posición actual
        navigator.geolocation.getCurrentPosition((position) => {
            //console.log(`latitude: ${position.coords.latitude}, longitude: ${position.coords.latitude, position.coords.longitude}`);
        
            /* ubicacion.value.lat = position.coords.latitude;
            ubicacion.value.lng = position.coords.longitude; */

            store.latitude = position.coords.latitude;
            store.longitude = position.coords.longitude;

            //map.value.setView([ubicacion.value.lat, ubicacion.value.lng], 13);
            map.value.setView([store.latitude, store.longitude], 13);
            
        });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

function marcaPosition() {
    L.marker([store.latitude, store.longitude], {draggable: true})
    .addTo(map.value)
    .on('dragend', (e) => {
        console.log("Arrastrado y soltado!");
        console.log(e);
    });
}
function setViewMap() {
    map.value.setView([inputLat.value, inputLng.value], 13);
    store.latitude = inputLat.value;
    store.longitude = inputLng.value;
}

</script>


<template>

    <h3>map</h3>

    <!-- <p>Latitud: {{ ubicacion.lat }}, longitud: {{ ubicacion.lng }}</p> -->
    <p>Latitud: {{ store.latitude }}, longitud: {{ store.longitude }}</p>

    <div class="input-container">
        <div>
            <label for="inputLat">Latitud:</label>
            <input type="text" name="inputLat" id="inputLat" v-model="inputLat">
        </div>
        <div>
            <label for="inputLng">Longitud:</label>
            <input type="text" name="inputLng" id="inputLng" v-model="inputLng">
        </div>

        <button class="btn-ir-map" @click="setViewMap()">Ir</button>

    </div>


    <!-- id="mapContainer" -->
    <div id="mapContainer" ref="mapContainer"></div>

    <div class="btn-map">
        <button @click="getLocation()">Obtener mi position</button>
        <button @click="marcaPosition()">Marcar position</button>        
    </div>


</template>


<style scoped>

h3 {
    text-align: center;
}

#mapContainer { 
    width: 100%;
    height: 400px; 
}

.input-container {
    display: flex;
    gap: 10px;
    margin: 20px;
    flex-wrap: wrap;
}

.input-container label {
    width: 50px;
}

input {
    padding: 10px;
    text-align: center;
}

.btn-ir-map {
    flex-grow: 1;
}

.btn-map {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px;
    
}

button {
    background-color: hsla(160, 100%, 37%, 1);
    cursor: pointer;
    color: #000;
    padding: 10px;
    border: none;

}

</style>