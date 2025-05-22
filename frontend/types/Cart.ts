// types/Cart.ts
import type { Product } from "#types/Product";

//Rappresenta un elemento all'interno del carrello
//Garantisce che ogni voce nel carrello contenga sempre un oggetto Product valido e una quantità numerica

export interface CartItem {
    product: Product;
    quantity: number;
}

//Stato del carrello, un array di CartItem
//Assicura che lo stato inziale e quello aggiornato dello store abbiano sempre la forma corretta

export interface CartState {
    items: CartItem[];
}

//Elenca le funzioni mutative (action) che il tuo store espone:
// - addItem aggiunge o incrementa la quantità di un prodotto.
// - removeItem rimuove completamente un prodotto dal carrello.
// - clearCart svuota l’intero carrello.
export interface CartActions {
    addItem(product: Product): void;
    removeItem(productId: string): void;
    clearCart(): void;
}

//in fase di implementazione ti aiuta a restituire sempre un number e ad accedere al state.items
// sapendo che contiene oggetti CartItem.
export interface CartGetters {
    totalQuantity: number;
    totalPrice: number;
}
