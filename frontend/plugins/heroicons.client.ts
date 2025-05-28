// plugins/heroicons.client.ts
import { defineNuxtPlugin } from "nuxt/app";
import * as SolidIcons from "@heroicons/vue/24/solid";
import * as OutlineIcons from "@heroicons/vue/24/outline";

export default defineNuxtPlugin((nuxtApp) => {
    const app = nuxtApp.vueApp;

    // registra tutte le solid icons
    Object.entries(SolidIcons).forEach(([name, comp]) => {
        // registra solo se non esiste già
        if (!app.component(name)) {
            nuxtApp.vueApp.component(name, comp as any);
        }
    });
    // registra tutte le outline icons
    Object.entries(OutlineIcons).forEach(([name, comp]) => {
        // registra solo se non esiste già
        if (!app.component(name)) {
            nuxtApp.vueApp.component(name, comp as any);
        }
    });
});
