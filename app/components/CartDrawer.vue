<template>
  <v-navigation-drawer
    v-model="isOpen"
    location="right"
    temporary
    width="400"
    class="cart-drawer"
  >

    <div class="drawer-header">
      <div class="drawer-title">
        <v-icon color="primary" class="mr-2">mdi-cart</v-icon>
        <span>Tu carrito</span>
        <v-chip v-if="cartCount > 0" size="small" color="primary" class="ml-2">
          {{ cartCount }} {{ cartCount === 1 ? 'item' : 'items' }}
        </v-chip>
      </div>
      <v-btn icon variant="text" size="small" @click="isOpen = false" aria-label="Cerrar carrito">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>

    <v-divider />

    <div v-if="cartItems.length === 0" class="empty-cart">
      <v-icon class="empty-icon" size="64" color="grey-lighten-1">mdi-cart-outline</v-icon>
      <p class="empty-title">Tu carrito está vacío</p>
      <p class="empty-subtitle">Agrega productos para comenzar</p>
      <v-btn
        color="primary"
        variant="tonal"
        rounded="lg"
        class="mt-4"
        @click="isOpen = false"
      >
        Explorar productos
      </v-btn>
    </div>

    <div v-else class="items-scroll">
      <div class="items-list px-4">
        <CartItem v-for="item in cartItems" :key="item.product.id" :item="item" />
      </div>
    </div>

    <template v-if="cartItems.length > 0">
      <v-divider />
      <div class="drawer-footer">
        <div class="subtotal-row">
          <span class="subtotal-label">Subtotal</span>
          <span class="subtotal-value">{{ formatCOP(cartTotal) }}</span>
        </div>
        <div class="shipping-row">
          <span>Envío</span>
          <span class="shipping-free">Gratis</span>
        </div>
        <v-divider class="my-3" />
        <div class="total-row">
          <span>Total</span>
          <span class="total-price">{{ formatCOP(cartTotal) }}</span>
        </div>
        <v-btn
          id="checkout-btn"
          color="primary"
          variant="elevated"
          size="large"
          block
          rounded="lg"
          class="mt-4 checkout-btn"
          prepend-icon="mdi-lock-outline"
        >
          Finalizar compra
        </v-btn>
        <v-btn
          variant="text"
          color="error"
          size="small"
          block
          class="mt-2"
          @click="clearCart"
        >
          Vaciar carrito
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const isOpen = defineModel<boolean>({ required: true })
const { cartItems, cartCount, cartTotal, clearCart } = useCart()
</script>

<style scoped>
.cart-drawer {
  display: flex;
  flex-direction: column;
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  flex-shrink: 0;
}

.drawer-title {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a2e;
}

.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 48px 24px;
  text-align: center;
}

.empty-icon {
  margin-bottom: 20px;
}

.empty-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 8px;
}

.empty-subtitle {
  font-size: 0.875rem;
  color: #888;
  margin: 0;
}

.items-scroll {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

.items-list {
  padding-bottom: 8px;
}

.drawer-footer {
  padding: 20px;
  background: #fafafa;
  flex-shrink: 0;
}

.subtotal-row,
.shipping-row,
.total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 6px;
  color: #444;
}

.subtotal-label {
  color: #666;
}

.subtotal-value {
  font-weight: 600;
}

.shipping-free {
  color: #43a047;
  font-weight: 600;
}

.total-row {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a2e;
}

.total-price {
  font-size: 1.3rem;
  font-weight: 800;
  color: #5C6BC0;
}

.checkout-btn {
  background: linear-gradient(135deg, #5C6BC0, #7E57C2) !important;
  font-weight: 600;
  letter-spacing: 0.5px;
  height: 52px !important;
}
</style>
