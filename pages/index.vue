<script setup lang="ts">
import { products } from "#data/products";
</script>

<template>
    <div class="min-h-screen flex flex-col items-center px-8">
        <h1 class="text-3xl font-bold animate-pulse py-10">Home</h1>
        <div class="flex flex-row justify-center gap-4 w-full flex-wrap">
            <ProductCard v-for="p in products" :key="p.id" :product="p" />
        </div>
    </div>
</template>
