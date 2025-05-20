<script setup></script>
<template>
    <header class="h-18 bg-gray-400 flex flex-1 flex-row">
        <div class="flex items-center px-10">
            <h1 class="text-2xl font-bold">Toy Ecommerce</h1>
        </div>
        <div
            class="bg-gray-300 flex flex-1 items-center justify-center gap-3 flex-wrap"
        >
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

            <div
                class="h-6 bg-amber-50 px-6 flex rounded-full items-center justify-center"
            >
                <p class="text-xs font-bold">Button 4</p>
            </div>
        </div>
    </header>
    <main>
        <slot />
    </main>
    <footer class="h-40 bg-gray-400 flex flex-1"></footer>
</template>
