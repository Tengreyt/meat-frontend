<template>
  <router-link to="/cart" class="relative">
    <span class="text-gray-600 hover:text-red-600 px-3 py-2 rounded-md">
      Корзина ({{ cartStore.totalItems }})
    </span>
  </router-link>
</template>

<script setup>
import { useCartStore } from '../../stores/cart'

const cartStore = useCartStore()
</script>