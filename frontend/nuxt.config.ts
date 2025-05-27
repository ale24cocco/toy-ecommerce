// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    modules: ["@nuxt/eslint", "@pinia/nuxt", "@nuxtjs/strapi"],
    css: ["~/assets/css/main.css"],
    components: [{ path: "~/components", pathPrefix: false }],
    alias: {
        "#types": resolve(__dirname, "types"),
        "#stores": resolve(__dirname, "stores"),
        "#data": resolve(__dirname, "data"),
    },
    vite: {
        plugins: [tailwindcss()],
    },
    strapi: {
        url: process.env.STRAPI_URL || "http://localhost:1337",
        token: process.env.STRAPI_TOKEN || undefined,
        prefix: "/api",
        admin: "/admin",
        version: "v5",
        cookie: {
            path: "/",
            maxAge: 14 * 24 * 60 * 60,
            secure: process.env.NODE_ENV === "production",
            sameSite: true,
        },
    },
});
