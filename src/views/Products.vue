<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Наши продукты</h1>
    
    <CategoryFilter
      :categories="CATEGORY_LIST"
      v-model="selectedCategory"
    />

    <ProductGrid :products="filteredProducts" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProductStore } from '../stores/products'
import { useRoute, useRouter } from 'vue-router'
import CategoryFilter from '../components/products/CategoryFilter.vue'
import ProductGrid from '../components/products/ProductGrid.vue'
import { CATEGORIES, CATEGORY_LABELS, CATEGORY_LIST } from '../constants/categories'

const route = useRoute()
const router = useRouter()
const productStore = useProductStore()

// Устанавливаем значение по умолчанию 'Все'
const selectedCategory = ref(CATEGORY_LABELS[CATEGORIES.ALL])

// Обновляем URL при изменении категории
const updateUrlCategory = (category) => {
  const categoryKey = Object.entries(CATEGORY_LABELS)
    .find(([_, label]) => label === category)?.[0]
  
  if (categoryKey !== CATEGORIES.ALL) {
    router.replace({ query: { category: categoryKey } })
  } else {
    router.replace({ query: {} })
  }
}

// Следим за изменением категории в URL
onMounted(() => {
  const categoryFromUrl = route.query.category
  if (categoryFromUrl && CATEGORY_LABELS[categoryFromUrl]) {
    selectedCategory.value = CATEGORY_LABELS[categoryFromUrl]
  }
})

// Вычисляем отфильтрованные продукты
const filteredProducts = computed(() => {
  const categoryKey = Object.entries(CATEGORY_LABELS)
    .find(([_, label]) => label === selectedCategory.value)?.[0]
  
  if (!categoryKey || categoryKey === CATEGORIES.ALL) {
    return productStore.products
  }
  
  return productStore.getByCategory(categoryKey)
})
</script>