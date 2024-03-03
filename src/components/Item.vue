<script setup>
import { useFoodStore } from '@/stores/foodStore';
let foodStore = useFoodStore();

const props = defineProps({
    info: Object,
    removeBtn: Boolean,
    removeFromFavor: Function
})

function addHandle(id) {
    foodStore.addToFavor(id)
}
</script>

<template>
    <div class="food-item" :id="info.id">
        <h1>{{ info.name }}</h1>
        <p>Difficult: {{ info.difficulty }}</p>
        <p>Cuisine: {{ info.cuisine }}</p>
        <div class="buttons" v-if="!removeBtn">
            <button @click="addHandle(info.id)">Add</button>
        </div>
        <div class="buttons" v-else>
            <button @click="removeFromFavor(info.id)">Remove</button>
        </div>
    </div>
</template>