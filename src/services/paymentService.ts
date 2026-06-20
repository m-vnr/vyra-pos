export interface PaymentRequest {
 orderId:string;
 amount:number;
 paymentMethod:string;
}

export async function processPayment(payment:PaymentRequest){
 return { success:true, payment };
}
