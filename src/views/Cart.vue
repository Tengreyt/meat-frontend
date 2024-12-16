<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Корзина</h1>
    
    <div v-if="cartStore.items.length === 0" class="text-center py-8">
      <p class="text-gray-600">Ваша корзина пуста</p>
      <router-link to="/products" class="text-red-600 hover:text-red-700 mt-4 inline-block">
        Продолжить покупки
      </router-link>
    </div>
    
    <div v-else>
      <div class="bg-white rounded-lg shadow-md p-6">
        <div v-for="item in cartStore.items" :key="item.id" class="flex items-center py-4 border-b">
          <img :src="item.image" :alt="item.name" class="w-24 h-24 object-cover rounded">
          <div class="ml-4 flex-grow">
            <h3 class="text-lg font-semibold">{{ item.name }}</h3>
            <p class="text-gray-600">{{ formatPrice(item.price) }} ₽</p>
          </div>
          <div class="flex items-center">
            <button 
              @click="updateQuantity(item.id, item.quantity - 1)"
              class="px-2 py-1 border rounded"
              :disabled="item.quantity <= 1"
            >-</button>
            <span class="mx-2">{{ item.quantity }}</span>
            <button 
              @click="updateQuantity(item.id, item.quantity + 1)"
              class="px-2 py-1 border rounded"
            >+</button>
          </div>
          <button 
            @click="cartStore.removeFromCart(item.id)"
            class="ml-4 text-red-600 hover:text-red-700"
          >
            Удалить
          </button>
        </div>
        
        <div class="mt-6 text-right">
          <p class="text-lg">Итого: <span class="font-bold">{{ formatPrice(cartStore.totalPrice) }} ₽</span></p>
          <button class="bg-red-600 text-white px-6 py-2 rounded mt-4 hover:bg-red-700">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

const updateQuantity = (productId, quantity) => {
  if (quantity < 1) return
  cartStore.updateQuantity(productId, quantity)
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU').format(price)
}
</script>