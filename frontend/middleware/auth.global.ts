import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useStrapiUser } from "#imports";

//Questo è un middleware globale che verifica se l'utente è autenticato
// e reindirizza alla pagina di login se non lo è.
// Puoi aggiungere questo middleware a tutte le rotte che richiedono autenticazione
// tramite definePageMeta({ requiresAuth: true }) nel file della pagina.
export default defineNuxtRouteMiddleware(async (to) => {
    if (to.meta.requiresAuth) {
        const user = useStrapiUser();
        if (!user.value) {
            return navigateTo("/login");
        }
    }
});
