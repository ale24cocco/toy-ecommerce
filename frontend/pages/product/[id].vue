<script setup lang="ts">
import { useRoute, navigateTo } from "nuxt/app";
import { computed } from "vue";

// Mi assicuro che l'utente sia autenticato
definePageMeta({ requiresAuth: true });

// Recupera l'id dinamico
const route = useRoute();
const id = route.params.id as string;

//recupero l'istanza del carello
const cart = useCartStore();

// Trova il prodotto corrispondente
const { data: product, error } = await useStrapi().findOne("products", id, {
    populate: ["image", "category"],
});

// Se non esiste, reindirizza alla home
// if (!product) {
//     navigateTo("/");
// }

// // l’URL raw (vuoto se non esiste)
// const imgUrl = computed(() => product.value?.image?.url ?? "");

// // URL completo (vuoto se non esiste)
// const imgSrc = computed(() =>
//     imgUrl.value ? useStrapiMedia(imgUrl.value) : ""
// );
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
                <!-- <img
                    v-if="imgUrl"
                    :src="imgSrc"
                    :alt="`Immagine di ${product.title}`"
                    class="max-w-full max-h-full object-contain object-center"
                /> -->
            </div>

            <div class="flex flex-col gap-6">
                <h1 class="text-3xl font-bold">{{ product.title }}</h1>

                <p class="text-xl text-gray-700">
                    € {{ product.price.toFixed(2) }}
                </p>

                <button
                    class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 cursor-pointer"
                    @click="cart.addItem(product)"
                >
                    Aggiungi al carrello
                </button>
            </div>
        </div>
    </div>
</template>
