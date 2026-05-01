export interface Product {
  id: number
  name: string
  price: number
  image: string
  description?: string
  category?: string
}

export interface CartItem {
  product: Product
  quantity: number
}

const cartItems = ref<CartItem[]>([])

export const useCart = () => {
  const addToCart = (product: Product) => {
    const existing = cartItems.value.find(i => i.product.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      cartItems.value.push({ product, quantity: 1 })
    }
  }

  const removeFromCart = (productId: number) => {
    cartItems.value = cartItems.value.filter(i => i.product.id !== productId)
  }

  const updateQuantity = (productId: number, delta: number) => {
    const item = cartItems.value.find(i => i.product.id === productId)
    if (!item) return
    item.quantity += delta
    if (item.quantity <= 0) {
      removeFromCart(productId)
    }
  }

  const clearCart = () => {
    cartItems.value = []
  }

  const cartCount = computed(() =>
    cartItems.value.reduce((sum, i) => sum + i.quantity, 0)
  )

  const cartTotal = computed(() =>
    cartItems.value.reduce((sum, i) => sum + i.product.price * i.quantity, 0)
  )

  const isInCart = (productId: number) =>
    cartItems.value.some(i => i.product.id === productId)

  return {
    cartItems: readonly(cartItems),
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
  }
}
