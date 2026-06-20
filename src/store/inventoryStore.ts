import { create } from 'zustand';

interface InventoryState {
 items:any[];
 setItems:(items:any[])=>void;
}

export const useInventoryStore = create<InventoryState>((set)=>( {
 items:[],
 setItems:(items)=>set({items})
}));
