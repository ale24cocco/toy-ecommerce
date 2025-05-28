<script setup lang="ts">
//importo il modulo per recuperare gli elementi da Strapi
const { find } = useStrapi();

//recupero i prodotti da Strapi
const response = await find("products", {
    populate: ["image", "category"], // in questo modo recupero anche le immagini e le categorie associate ai prodotti
});

// salvo in maniera reattiva i prodotti
const products = ref(response.data);
</script>

<template>
    <div class="min-h-screen flex flex-1 flex-col items-center px-8 gap-6">
        <h1 class="text-3xl font-bold animate-pulse">Home</h1>

        <div class="flex flex-row justify-center gap-4 w-full flex-wrap">
            <ProductCard
                v-for="p in products"
                :key="p.documentId"
                :product="p"
            />
        </div>
    </div>
</template>
