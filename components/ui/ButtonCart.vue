<script setup lang="ts">
import { ref } from "vue";
import { useCartStore } from "#stores/cart";

const showMenu = ref(false);
const cart = useCartStore();
</script>

<template>
    <!-- Questo componente serve per capire quando io passo con il mouse sopra il carrello -->
    <!-- La sintassi showMenu = true è l'unwrapping di showMenu.value = true, in quanto dentro il template non posso usare .value. Se fossi dentro lo script, dovrei usare .value -->
    <div
        class="relative"
        @mouseenter="showMenu = true"
        @mouseleave="showMenu = false"
    >
        <ShoppingCartIcon class="h-8 w-8 hover:text-blue-600 cursor-pointer" />

        <!-- Popup del menù del carrello accessibili quando in hover -->
        <transition name="cart-menu">
            <div
                v-if="showMenu"
                class="absolute border right-0 top-[41px] w-64 bg-white rounded shadow-lg z-20 p-4"
            >
                <!-- Triangolino -->
                <svg
                    class="absolute w-4 h-4 right-[7px] top-[-16px]"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon points="50,0 100,100 0,100" class="fill-white" />
                    <!-- Solo i due spigoli laterali -->
                    <polyline
                        points="0,100 50,0 100,100"
                        fill="none"
                        stroke="black"
                        stroke-width="7"
                        stroke-linejoin="round"
                    />
                </svg>

                <h2 class="font-bold">Il tuo carrello</h2>

                <div v-if="cart.items.length">
                    <ul class="divide-y">
                        <li
                            v-for="item in cart.items"
                            :key="item.product.id"
                            class="py-2 flex justify-between items-center text-sm"
                        >
                            <span>{{ item.product.title }}</span>
                            <span>x{{ item.quantity }}</span>
                            <span class="font-bold">
                                €{{
                                    (
                                        item.product.price * item.quantity
                                    ).toFixed(2)
                                }}
                            </span>
                        </li>
                    </ul>
                    <div class="mt-3 text-right font-medium">
                        Totale: €{{ cart.totalPrice.toFixed(2) }}
                    </div>
                    <div class="mt-4 flex justify-between">
                        <button
                            class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            Checkout
                        </button>
                        <button
                            @click="cart.clearCart()"
                            class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Svuota
                        </button>
                    </div>
                </div>

                <div v-else class="text-center text-gray-500">
                    Carrello vuoto
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.cart-menu-enter-active,
.cart-menu-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

/* stili iniziali/finali */
.cart-menu-enter-from,
.cart-menu-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
.cart-menu-enter-to,
.cart-menu-leave-from {
    opacity: 1;
    transform: translateY(0);
}

/* delay per entrata e uscita */
.cart-menu-enter-active {
    transition-delay: 0.1s; /* delay prima che parta l’animazione di entrata */
}
.cart-menu-leave-active {
    transition-delay: 0.2s; /* piccolo delay anche all’uscita */
}
</style>
