// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    modules: ["@nuxt/eslint"],
    css: ["~/assets/css/main.css"],
    alias: {
        "#types": resolve(__dirname, "types"),
        "#stores": resolve(__dirname, "stores"),
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
