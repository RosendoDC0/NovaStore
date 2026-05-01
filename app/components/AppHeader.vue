<template>
  <v-app-bar flat height="64" color="surface" border="b" class="app-header px-2">
    <v-app-bar-title class="header-title">
      <span class="store-name">{{ storeName }}</span>
    </v-app-bar-title>

    <template #append>
      <v-btn
        id="cart-btn"
        icon
        variant="text"
        size="large"
        class="cart-btn mr-1"
        @click="$emit('open-cart')"
        aria-label="Abrir carrito de compras"
      >
        <v-badge
          :content="cartCount"
          :model-value="cartCount > 0"
          color="accent"
          floating
        >
          <v-icon size="26" :color="cartCount > 0 ? 'primary' : 'grey-darken-1'">
            mdi-cart-outline
          </v-icon>
        </v-badge>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
defineProps<{ storeName?: string }>()
defineEmits<{ 'open-cart': [] }>()

const { cartCount } = useCart()
</script>

<style scoped>
.app-header {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.92) !important;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 10px;
}


.store-name {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #5C6BC0, #7E57C2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}


</style>
