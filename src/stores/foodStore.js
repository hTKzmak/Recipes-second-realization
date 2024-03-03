import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFoodStore = defineStore('Food', () => {

  // fetch запрос
  fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(json => json.recipes.map(elem => {
      let item = {
        id: elem.id,
        name: elem.name,
        difficulty: elem.difficulty,
        cuisine: elem.cuisine
      }
      foodData.value.push(item)
    }));


  // данные
  let foodData = ref([])
  let favoriteData = ref([])


  // функция по добавлению рецепта в favoriteData
  let addToFavor = (id) => {
    foodData.value.find(elem => {
      if (elem.id == id) {
        favoriteData.value.push(elem)
      }
    })
    console.log(favoriteData.value)
  }

  // функция по удалению рецепта из favoriteData
  let removeFromFavor = (id) => {
    let index = favoriteData.value.findIndex(elem => elem.id === id)
    if (index !== -1) {
      favoriteData.value.splice(index, 1);
    }
  }

  let searchRecipe = async (value) => {
    foodData.value.splice(0, foodData.value.length) 
    await fetch(`https://dummyjson.com/recipes/search?q=${value}`)
      .then(res => res.json())
      .then(json => json.recipes.map(elem => {
        let item = {
          id: elem.id,
          name: elem.name,
          difficulty: elem.difficulty,
          cuisine: elem.cuisine
        }
        foodData.value.push(item)
      }));
  }


  return { foodData, favoriteData, addToFavor, removeFromFavor, searchRecipe }
})
