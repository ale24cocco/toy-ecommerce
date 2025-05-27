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
    <div class="min-h-screen flex flex-1 flex-col items-center px-8">
        <h1 class="text-3xl font-bold animate-pulse py-10">Login</h1>

        <form
            @submit.prevent="onSubmit"
            class="flex flex-col gap-4 p-8 bg-white rounded-lg shadow-lg"
        >
            <label>Email:</label>
            <input v-model="identifier" type="email" required />
            <label>Password:</label>
            <input v-model="password" type="password" required />
            <button type="submit">Accedi</button>
        </form>
    </div>
</template>
