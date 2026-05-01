<template>
  <v-card
    class="product-card"
    :id="`product-${product.id}`"
  >
    <v-img
      :src="product.image"
      :alt="product.name"
      height="220"
      cover
    />

    <v-card-text class="card-body">
      <div class="product-meta">
        <p class="product-name">{{ product.name }}</p>
        <p v-if="product.description" class="product-description">
          {{ product.description }}
        </p>
      </div>

      <div class="card-footer">
        <span class="product-price">{{ formatCOP(product.price) }}</span>

        <v-btn
          :id="`add-to-cart-${product.id}`"
          :color="added ? 'success' : 'primary'"
          variant="elevated"
          size="small"
          rounded="lg"
          class="add-btn"
          :prepend-icon="added ? 'mdi-check' : 'mdi-cart-plus'"
          @click="handleAdd"
          :aria-label="`Agregar ${product.name} al carrito`"
        >
          {{ added ? 'Agregado' : 'Agregar' }}
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { Product } from '~/composables/useCart'

const props = defineProps<{ product: Product }>()

const { addToCart } = useCart()

const added = ref(false)

const handleAdd = () => {
  addToCart(props.product)
  added.value = true
  setTimeout(() => (added.value = false), 1500)
}
</script>

<style scoped>
.product-card {
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06) !important;
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
}


.card-body {
  padding: 16px !important;
}

.product-meta {
  margin-bottom: 14px;
}

.product-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 4px;
  line-height: 1.3;
}

.product-description {
  font-size: 0.78rem;
  color: #999;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.product-price {
  font-size: 1.15rem;
  font-weight: 800;
  color: #5C6BC0;
}

.add-btn {
  font-weight: 600;
  font-size: 0.8rem;
}
</style>
