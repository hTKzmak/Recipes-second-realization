<script setup>
import { useFoodStore } from '@/stores/foodStore';
import Item from '../components/Item.vue'

let foodStore = useFoodStore();

let foodData = foodStore.foodData;

</script>

<template>
  <main>
    <div class="search">
      <p>Search recipe</p>
      <input type="text" @keydown.enter="foodStore.searchRecipe($event.target.value)">
    </div>

    <div class="food-list">
      <div v-for="info in foodData">
        <Item :info="info" />
      </div>
    </div>
  </main>
</template>

<style>
.search {
  margin: 50px;
  text-align: center;
}
</style>