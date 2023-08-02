import {
    defineStore
} from "pinia";
import {
    ref
} from "vue";

export const useUbicacionMapStore = defineStore('ubicacionMap', () => {

    const latitude = ref(-34.60376);
    const longitude = ref(-58.38162);

    return {
        latitude,
        longitude
    }

})