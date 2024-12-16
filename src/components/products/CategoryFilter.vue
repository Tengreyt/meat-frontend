<template>
  <div class="flex gap-4 mb-8">
    <button 
      v-for="category in categories" 
      :key="category"
      @click="emit('update:modelValue', category)"
      :class="[
        'px-4 py-2 rounded-full transition-colors duration-200',
        modelValue === category 
          ? 'bg-red-600 text-white' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      ]"
    >
      {{ category }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])
</script>