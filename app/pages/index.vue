<template>
  <AppHeader store-name="Nova Store" @open-cart="cartOpen = true" />

  <CartDrawer v-model="cartOpen" />

  <v-main class="main-bg">
    <v-container class="py-10 px-4" max-width="1200">

      <div class="hero mb-10">
        <p class="hero-eyebrow">Nuevos productos</p>
        <h1 class="hero-title">Descubre nuestra colección</h1>
        <p class="hero-subtitle">
          Calidad premium a precios accesibles. Envío gratis en todos los pedidos.
        </p>
      </div>

      <div class="filters mb-8">
        <v-chip-group v-model="selectedCategory" mandatory selected-class="filter-active">
          <v-chip
            v-for="cat in categories"
            :key="cat.value"
            :value="cat.value"
            size="small"
            rounded="lg"
            variant="tonal"
            color="primary"
          >
            {{ cat.label }}
          </v-chip>
        </v-chip-group>
      </div>

      <v-row>
        <v-col
          v-for="product in filteredProducts"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <ProductCard :product="product" />
        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import type { Product } from '~/composables/useCart'

useHead({
  title: 'Nova Store — Tienda Online',
  meta: [
    {
      name: 'description',
      content: 'Descubre nuestra colección de productos premium con envío gratis.',
    },
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
    },
  ],
})

const cartOpen = ref(false)

const categories = [
  { label: 'Todo', value: 'all' },
  { label: 'Electrónica', value: 'electronics' },
  { label: 'Moda', value: 'fashion' },
  { label: 'Hogar', value: 'home' },
  { label: 'Deporte', value: 'sport' },
]

const selectedCategory = ref<string>('all')

const products: Product[] = [
  {
    id: 1,
    name: 'Auriculares Pro Max',
    price: 369000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    description: 'Sonido envolvente con cancelación de ruido activa',
    category: 'electronics',
  },
  {
    id: 2,
    name: 'Smartwatch Series X',
    price: 529000,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    description: 'Monitoreo de salud y GPS integrado',
    category: 'electronics',
  },
  {
    id: 3,
    name: 'Mochila Urban Explorer',
    price: 224000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
    description: 'Resistente al agua con puerto USB',
    category: 'fashion',
  },
  {
    id: 4,
    name: 'Lámpara de Escritorio LED',
    price: 172000,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop',
    description: 'Luz regulable con puerto de carga',
    category: 'home',
  },
  {
    id: 5,
    name: 'Botella Térmica 1L',
    price: 119000,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop',
    description: 'Mantiene temperatura 24 horas',
    category: 'sport',
  },
  {
    id: 6,
    name: 'Zapatillas Runner Pro',
    price: 390000,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    description: 'Suela amortiguadora para largas distancias',
    category: 'sport',
  },
  {
    id: 7,
    name: 'Cámara Instantánea',
    price: 304000,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop',
    description: 'Imprime fotos en segundos',
    category: 'electronics',
  },
  {
    id: 8,
    name: 'Planta Suculenta Set',
    price: 82000,
    image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&h=300&fit=crop',
    description: 'Pack de 3 plantas decorativas',
    category: 'home',
  },
]

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') return products
  return products.filter(p => p.category === selectedCategory.value)
})
</script>

<style scoped>
.main-bg {
  background: linear-gradient(180deg, #F0F1FF 0%, #F8F9FB 120px);
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}

.hero {
  text-align: center;
  padding: 20px 0;
}

.hero-eyebrow {
  font-size: 0.875rem;
  font-weight: 600;
  color: #7E57C2;
  letter-spacing: 0.5px;
  margin: 0 0 12px;
  text-transform: uppercase;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 16px;
  line-height: 1.15;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1rem;
  color: #666;
  margin: 0;
  max-width: 480px;
  margin-inline: auto;
  line-height: 1.6;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

:deep(.filter-active) {
  background: #5C6BC0 !important;
  color: white !important;
}
</style>
