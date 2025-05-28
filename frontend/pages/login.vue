<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStrapiAuth } from "#imports";

const identifier = ref("");
const password = ref("");
const router = useRouter();

// Composable di autenticazione
const { login } = useStrapiAuth();

async function onSubmit() {
    try {
        await login({ identifier: identifier.value, password: password.value });
        router.push("/"); // Dopo il login, torna alla home
    } catch (err) {
        console.error("Login fallito:", err);
    }
}
</script>

<template>
    <div class="min-h-screen flex flex-1 flex-col items-center px-8 gap-6">
        <h1 class="text-3xl font-bold animate-pulse">Login</h1>

        <form
            @submit.prevent="onSubmit"
            class="flex flex-col gap-10 py-8 w-80 px-10 bg-gray-300 rounded-lg shadow-lg"
        >
            <div class="flex flex-col gap-4 group">
                <label
                    class="font-bold transition-colors group-focus-within:text-blue-600"
                    >Email:</label
                >
                <input
                    v-model="identifier"
                    class="border bg-white rounded-full py-2 px-3 text-xs focus:outline-none focus:border-blue-600 transition-colors"
                    type="email"
                    required
                />
            </div>

            <div class="flex flex-col gap-4 group">
                <label
                    class="font-bold transition-colors group-focus-within:text-blue-600"
                    >Password:</label
                >
                <input
                    v-model="password"
                    class="border bg-white rounded-full py-2 px-3 text-xs focus:outline-none focus:border-blue-600 transition-colors"
                    type="password"
                    required
                />
            </div>

            <button
                type="submit"
                class="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-800 cursor-pointer"
            >
                Accedi
            </button>
        </form>
    </div>
</template>
