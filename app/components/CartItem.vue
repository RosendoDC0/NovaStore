<template>
  <div class="cart-item">
    <v-img
      :src="item.product.image"
      :alt="item.product.name"
      width="72"
      height="72"
      cover
      rounded="lg"
      class="flex-shrink-0 item-image"
    />

    <div class="item-info">
      <p class="item-name">{{ item.product.name }}</p>
      <p class="item-price-unit">{{ formatCOP(item.product.price) }} c/u</p>

      <div class="qty-controls">
        <v-btn
          :id="`decrease-qty-${item.product.id}`"
          icon
          size="x-small"
          variant="tonal"
          :color="item.quantity === 1 ? 'error' : 'primary'"
          class="qty-btn"
          @click="handleDecrease"
          :aria-label="`Disminuir cantidad de ${item.product.name}`"
        >
          <v-icon size="16">
            {{ item.quantity === 1 ? 'mdi-trash-can-outline' : 'mdi-minus' }}
          </v-icon>
        </v-btn>

        <span class="qty-value">{{ item.quantity }}</span>

        <v-btn
          :id="`increase-qty-${item.product.id}`"
          icon
          size="x-small"
          variant="tonal"
          color="primary"
          class="qty-btn"
          @click="updateQuantity(item.product.id, 1)"
          :aria-label="`Aumentar cantidad de ${item.product.name}`"
        >
          <v-icon size="16">mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="item-total">
      <span>{{ formatCOP(item.product.price * item.quantity) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CartItem } from '~/composables/useCart'

const props = defineProps<{ item: CartItem }>()

const { updateQuantity, removeFromCart } = useCart()

const handleDecrease = () => {
  if (props.item.quantity === 1) {
    removeFromCart(props.item.product.id)
  } else {
    updateQuantity(props.item.product.id, -1)
  }
}
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.cart-item:last-child {
  border-bottom: none;
}

.item-image {
  border-radius: 12px;
  flex-shrink: 0;
}

.item-info {
  flex: 1;
  min-width: 0;
}

.item-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-price-unit {
  font-size: 0.75rem;
  color: #888;
  margin: 0 0 10px;
}

.qty-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.qty-value {
  font-size: 0.9rem;
  font-weight: 700;
  min-width: 20px;
  text-align: center;
  color: #1a1a2e;
}

.item-total {
  font-size: 0.9rem;
  font-weight: 700;
  color: #5C6BC0;
  flex-shrink: 0;
}
</style>
