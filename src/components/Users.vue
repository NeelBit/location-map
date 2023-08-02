<script setup>
import { ref, onMounted } from 'vue';
import { useUbicacionMapStore } from '../stores/UbicacionMap';

const store = useUbicacionMapStore();

const users = ref([]);

const btnDeleteDragEnter = ref(false);
const btnFindDragEnter = ref(false);

onMounted( async ()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    users.value = await res.json();
})

function startDrag(evt, user) {
    evt.dataTransfer.dropEffect = 'move';
    evt.dataTransfer.effectAllowed = 'move';
    evt.dataTransfer.setData('userID', user.id);
    evt.dataTransfer.setData('userLat', user.address.geo.lat);
    evt.dataTransfer.setData('userLng', user.address.geo.lng);
}

function onDropDelete(evt) {
    if (confirm('Desea borrar el usuario?')) {
        const itemID = evt.dataTransfer.getData('userID');
        const nuevo = users.value.filter((user) => user.id != itemID);
        users.value = [...nuevo];
    } else {
        console.log("No se eliminó");
    }

    btnDeleteDragEnter.value = false;
}

function onDropFindMap(evt) {
    store.longitude = evt.dataTransfer.getData('userLng');
    store.latitude = evt.dataTransfer.getData('userLat');

    btnFindDragEnter.value = false;
}

</script>


<template>

    <h3>Users: </h3>
    <div class="users-container">

        <div class="users-btn" 
            @drop="onDropDelete($event)" 
            @dragover.prevent 
            @dragenter.prevent="btnDeleteDragEnter = true"
            @dragleave.prevent="btnDeleteDragEnter = false"
            :class="btnDeleteDragEnter ? 'users-btn-delete--active' : ''">
            Borrar
        </div>

        <div class="users-list">
            <div class="user" v-for="user in users" 
                :key="user.id" 
                draggable="true" 
                @dragstart="startDrag($event, user)">
                {{ user.name }}
            </div>
        </div>

        <div class="users-btn" 
            @drop="onDropFindMap($event)"
            @dragover.prevent 
            @dragenter.prevent="btnFindDragEnter = true"
            @dragleave.prevent="btnFindDragEnter = false"
            :class="btnFindDragEnter ? 'users-btn-find--active' : ''">
            Ir en el mapa
        </div>

    </div>

</template>


<style scoped>

h3 {
    text-align: center;
}
.users-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.users-list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    /* height: 300px;
    overflow-x: scroll; */
}

.users-btn {
    cursor: pointer;
    border: 1px solid #000;
    padding: 10px;
    border-radius: 10px;

    height: 50px;
    width: 50px;

    display: grid;
    place-content: center;

    transition: all 0.5s ease-out;

    background-color: var(--vt-c-white-soft);
    color: #000;
}

.users-btn:hover {
    background-color: hsla(160, 100%, 37%, 1);
    color: #000;
}

.users-btn-delete--active {
    background-color: red;
}

.users-btn-find--active {
    background-color: hsla(160, 100%, 37%, 1);
}

.user {
    cursor: crosshair;
    text-align: center;
    padding: 5px;
    transition: all 0.5s ease-in-out;
}

.user:hover {
    background-color: hsla(160, 100%, 37%, 1);
    color: #000;
}

</style>