<script setup lang="ts">
import { useStrapiMedia } from "#imports";
import { computed } from "vue";
import type { Product } from "#types";

// prendo le props in una costante esplicita
const props = defineProps<{ product: Product }>();

// l’URL raw (vuoto se non esiste)
const imgUrl = computed(() => props.product.image?.url ?? "");

// URL completo (vuoto se non esiste)
const imgSrc = computed(() =>
    imgUrl.value ? useStrapiMedia(imgUrl.value) : ""
);
</script>

<template>
    <div
        class="bg-gray-300 rounded-lg shadow-lg overflow-hidden px-4 py-4 flex flex-col items-center gap-6"
    >
        <div
            class="bg-white rounded-lg overflow-hidden flex items-center justify-center w-50 h-50 p-2"
        >
            <img
                v-if="imgUrl"
                :src="imgSrc"
                :alt="`Immagine di ${props.product.title}`"
                class="max-w-full max-h-full object-contain object-center"
            />
        </div>

        <div class="w-50">
            <NuxtLink
                :to="{
                    name: 'product-id',
                    params: { id: props.product.documentId },
                }"
                ><h2 class="text-lg font-semibold hover:text-blue-700">
                    {{ product.title }}
                </h2></NuxtLink
            >

            <p class="mt-2 text-gray-700">€ {{ product.price.toFixed(2) }}</p>
        </div>
    </div>
</template>
