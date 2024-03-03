<script setup>
import { ref, computed } from 'vue'
import { useFoodStore } from '@/stores/foodStore';
import Item from '../components/Item.vue'
let foodStore = useFoodStore();

let favoriteData = foodStore.favoriteData;
let difficultValue = ref('All')

const difficultFilter = computed(() => {
  if (difficultValue.value == 'All') {
    return favoriteData
  }
  else {
    return favoriteData.filter(
      (elem) => elem.difficulty === difficultValue.value)
  }
})


</script>


<template>
  <main>

    <div class="difficult">
      <select name="difficult" id="difficult" v-model="difficultValue">
        <option value="All">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
      </select>
    </div>

    <div class="favorite-list">
      <div v-for="info in difficultFilter">
        <Item :info="info" :removeFromFavor="foodStore.removeFromFavor" :removeBtn="true" />
      </div>
    </div>
  </main>
</template>