export interface Order {
 id:string;
 tableNo:string;
 status:'draft'|'confirmed'|'preparing'|'ready'|'served';
 total:number;
}

export async function createOrder(order:Order){
 return { success:true, order };
}

export async function updateOrderStatus(orderId:string,status:string){
 return { success:true, orderId, status };
}
