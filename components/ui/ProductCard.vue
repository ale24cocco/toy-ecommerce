<script setup lang="ts">
import type { Product } from "#types/Product";
defineProps<{ product: Product }>();
</script>

<template>
    <div
        class="border rounded-lg overflow-hidden px-4 py-4 flex flex-col items-center gap-2"
    >
        <div
            class="border rounded-lg overflow-hidden flex items-center justify-center w-50 h-50 p-2"
        >
            <img
                :src="product.image"
                :alt="product.title"
                class="max-w-full max-h-full object-contain object-center"
            />
        </div>

        <div class="w-50">
            <a
                ><NuxtLink
                    :to="{ name: 'product-id', params: { id: product.id } }"
                    ><h2 class="text-lg font-semibold hover:text-blue-700">
                        {{ product.title }}
                    </h2></NuxtLink
                ></a
            >

            <p class="mt-2 text-gray-600">€ {{ product.price.toFixed(2) }}</p>
        </div>
    </div>
</template>
