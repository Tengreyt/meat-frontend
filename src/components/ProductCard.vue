<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-lg font-semibold">{{ product.name }}</h3>
      <p class="text-gray-600 text-sm mt-1">{{ product.description }}</p>
      <div class="mt-4 flex justify-between items-center">
        <span class="text-xl font-bold">{{ formattedPrice }} ₽</span>
        <button 
          @click="addToCart(product)"
          class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
        >
          В корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'
import { formatPrice } from '../utils/formatters'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()
const addToCart = (product) => cartStore.addToCart(product)

const formattedPrice = computed(() => formatPrice(props.product.price))
</script>