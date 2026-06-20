import { create } from 'zustand';

interface CartItem {
 id:string;
 name:string;
 qty:number;
 price:number;
}

interface CartState {
 items: CartItem[];
 addItem:(item:CartItem)=>void;
 removeItem:(id:string)=>void;
 clearCart:()=>void;
}

export const useCartStore = create<CartState>((set)=>( {
 items:[],
 addItem:(item)=>set((s)=>({items:[...s.items,item]})),
 removeItem:(id)=>set((s)=>({items:s.items.filter(i=>i.id!==id)})),
 clearCart:()=>set({items:[]})
}));
