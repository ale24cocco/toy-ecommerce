<script setup lang="ts">
//con data: products sto rinominando la variabile che contiene i prodotti, originariamente chiamata data
const {
    data: products,
    error,
    pending,
} = await useStrapi().find("products", {
    populate: ["image", "category"],
}); // popola le relazioni image e category
</script>

<template>
    <div class="min-h-screen flex flex-1 flex-col items-center px-8">
        <h1 class="text-3xl font-bold animate-pulse py-10">Home</h1>

        <div class="flex flex-row justify-center gap-4 w-full flex-wrap">
            <ProductCard v-for="p in products" :key="p.id" :product="p" />
        </div>
    </div>
</template>
