import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Рибай стейк премиум',
        price: 2999,
        image: '/images/ribeye.jpg',
        description: 'Мраморный, нежный стейк рибай, идеален для гриля',
        category: 'beef'
      },
      {
        id: 2,
        name: 'Рисовые отбивные',
        price: 899,
        image: '/images/pork-chops.jpg',
        description: 'Порционные отбивные из риса',
        category: 'pork'
      },
      {
        id: 3,
        name: 'Куриная грудка',
        price: 399,
        image: '/images/chicken-breast.jpg',
        description: 'Филе куриной грудки без кожи и костей',
        category: 'poultry'
      },
      {
        id: 4,
        name: 'Фарш говяжий',
        price: 599,
        image: '/images/ground-beef.jpg',
        description: 'Свежий говяжий фарш, жирность 20%',
        category: 'beef'
      }
    ]
  }),
  getters: {
    getByCategory: (state) => (category) => {
      return state.products.filter(product => product.category === category)
    }
  }
})