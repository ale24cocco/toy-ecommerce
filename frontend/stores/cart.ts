import { defineStore } from "pinia";
import type { CartState, CartItem } from "#types/Cart";
import type { Product } from "#types/Product";

//definisco lo store del carrello
export const useCartStore = defineStore("cart", {
    // 1. Nome univoco dello store
    // --- ❶ STATE --------------------------------------------------------
    // con (): CartState lato typescript definisco il tipo di ritorno della funzione, ovvero CartState
    state: (): CartState => ({
        items: [], //array di CartItem, inizialmente vuoto
    }),

    // --- ❷ GETTERS ------------------------------------------------------
    getters: {
        // totalQuantity: somma di tutte le quantità di prodotti
        totalQuantity: (state): number =>
            state.items.reduce((sum, item) => sum + item.quantity, 0),

        // totalPrice: somma di prezzo * quantità per ciascun elemento
        totalPrice: (state): number =>
            state.items.reduce(
                (sum, item) => sum + item.quantity * item.product.price,
                0
            ),
    },

    // --- ❸ ACTIONS ------------------------------------------------------
    actions: {
        // Aggiunge un prodotto: se esiste incrementa, altrimenti crea un nuovo CartItem
        addItem(product: Product) {
            const existing = this.items.find(
                (i) => i.product.id === product.id
            );
            if (existing) {
                existing.quantity++;
            } else {
                this.items.push({ product, quantity: 1 } as CartItem);
            }
        },

        // Rimuove completamente un prodotto dal carrello
        removeItem(productId: string) {
            this.items = this.items.filter((i) => i.product.id !== productId);
        },

        // Svuota tutto il carrello
        clearCart() {
            this.items = [];
        },
    },
});
