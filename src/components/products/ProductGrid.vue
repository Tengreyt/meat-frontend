<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProductCard 
      v-for="product in products" 
      :key="product.id" 
      :product="product"
    />
  </div>
</template>

<script setup>
import ProductCard from '../ProductCard.vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>