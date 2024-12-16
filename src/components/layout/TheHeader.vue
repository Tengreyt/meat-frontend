<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <router-link to="/" class="text-xl font-bold text-red-600">
          МясноFF
        </router-link>
        
        <div class="flex space-x-4">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="text-gray-600 hover:text-red-600 px-3 py-2 rounded-md"
          >
            {{ item.name }}
          </router-link>
          
          <CartButton />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import CartButton from '../ui/CartButton.vue'

const navItems = [
  { name: 'Главная', path: '/' },
  { name: 'Продукты', path: '/products' },
  { name: 'О нас', path: '/about' }
]
</script>