<script setup>
import {
    UserCircleIcon,
    ArrowRightStartOnRectangleIcon,
} from "@heroicons/vue/24/outline";

//importo il composable per la deautenticazione
const { logout } = useStrapiAuth();

//importo il composable vedere se l'utente è autenticato
// e prendo i dati dell'utente. user è una ref reattiva
const user = useStrapiUser();

//con !! trasformo il dato in booleano se esiste, altrimenti false (null, undefined, etc.)
const isAuthenticated = computed(() => !!user.value);

// console.log(user.value);
</script>
<template>
    <header class="h-18 bg-gray-300 flex flex-1 flex-row px-6 gap-3">
        <div class="flex items-center justify-start">
            <NuxtLink to="/">
                <h1 class="text-2xl font-bold hover:text-blue-600">
                    Toy Ecommerce
                </h1>
            </NuxtLink>
        </div>

        <div class="flex flex-1 items-center justify-center gap-3 flex-wrap">
            <div
                class="h-6 bg-amber-50 px-6 flex rounded-full items-center justify-center"
            >
                <p class="font-bold text-xs">Button 1</p>
            </div>

            <div
                class="h-6 bg-amber-50 px-6 flex rounded-full items-center justify-center"
            >
                <p class="text-xs font-bold">Button 2</p>
            </div>

            <div
                class="h-6 bg-amber-50 px-6 flex rounded-full items-center justify-center"
            >
                <p class="text-xs font-bold">Button 3</p>
            </div>
        </div>
        <div class="flex items-center gap-6 justify-end">
            <ButtonCart></ButtonCart>

            <!-- se non loggato, link al login -->
            <NuxtLink v-if="!isAuthenticated" to="/login">
                <UserCircleIcon
                    class="h-8 w-8 hover:text-blue-600 cursor-pointer"
                />
            </NuxtLink>

            <!-- se loggato, mostra l'icona di logout -->
            <ArrowRightStartOnRectangleIcon
                v-else
                @click="logout()"
                class="h-8 w-8 hover:text-blue-600 cursor-pointer"
            />
        </div>
    </header>

    <main class="flex">
        <slot />
    </main>

    <footer class="h-40 bg-gray-400 flex flex-1"></footer>
</template>
