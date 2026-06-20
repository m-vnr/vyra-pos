import { create } from 'zustand';

interface OrderState {
 currentOrderId: string | null;
 status: string;
 setOrder: (id:string,status:string)=>void;
 clearOrder: ()=>void;
}

export const useOrderStore = create<OrderState>((set)=>( {
 currentOrderId:null,
 status:'draft',
 setOrder:(id,status)=>set({currentOrderId:id,status}),
 clearOrder:()=>set({currentOrderId:null,status:'draft'})
}));
