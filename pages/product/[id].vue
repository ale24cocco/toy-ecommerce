<script setup lang="ts">
import { useRoute, navigateTo } from "nuxt/app";
import { products } from "#data/products";
import type { Product } from "#types/Product";

// Recupera l'id dinamico
const route = useRoute();
const id = route.params.id as string;

// Trova il prodotto corrispondente
const product: Product | undefined = products.find((p) => p.id === id);

// Se non esiste, reindirizza alla home
if (!product) {
    navigateTo("/");
}
</script>

<template>
    <div
        v-if="product"
        class="min-h-screen flex flex-1 flex-col items-center px-8"
    >
        <h1 class="text-3xl font-bold animate-pulse py-10">Detail</h1>

        <div
            class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-full p-8"
        >
            <div class="flex items-center justify-center p-6">
                <img
                    :src="product.image"
                    :alt="product.title"
                    class="max-w-full max-h-full object-contain object-center"
                />
            </div>

            <div class="flex flex-col gap-6">
                <h1 class="text-3xl font-bold">{{ product.title }}</h1>

                <p class="text-xl text-gray-700">
                    € {{ product.price.toFixed(2) }}
                </p>

                <button
                    class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 cursor-pointer"
                >
                    Aggiungi al carrello
                </button>
            </div>
        </div>
    </div>
</template>
