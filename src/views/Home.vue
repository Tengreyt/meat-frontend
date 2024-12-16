<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Добро пожаловать в МясноFF</h1>
      <p class="text-xl text-gray-600">Качественное мясо с доставкой до вашей двери</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="category in categories" :key="category.name" 
           class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <router-link :to="{ name: 'products', query: { category: category.id }}">
          <img :src="category.image" :alt="category.name" class="w-full h-48 object-cover">
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-900">{{ category.name }}</h2>
            <p class="text-gray-600 mt-2">{{ category.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    id: 'beef',
    name: 'Премиальная говядина',
    description: 'Высококачественные отрубы говядины на любой случай',
    image: 'https://avatars.mds.yandex.net/get-altay/4336412/2a0000017949636e7451a7b0e0248ca2ed0d/XXL_height'
  },
  {
    id: 'pork',
    name: 'Свежая рыбв',
    description: 'Вкусные отрубы рыбы от проверенных поставщиков',
    image: 'https://avatars.mds.yandex.net/get-altay/11396712/2a0000018becebf8da192d465b9c984ded39/XXL_height'
  },
  {
    id: 'poultry',
    name: 'Птица',
    description: 'Свежее куриное мясо и индейка',
    image: 'https://myaso-optom.net/wp-content/uploads/2019/07/2-1920x850.jpg'
  }
]
</script>