import { useState } from 'react';
import { useCartStore } from '../store/cartStore';

export default function PaymentModal(){
 const [method,setMethod] = useState('UPI');
 const items = useCartStore((s:any)=>s.items);
 const clearCart = useCartStore((s:any)=>s.clearCart);

 const amount = items.reduce((sum:number,item:any)=>sum + (item.price * item.qty),0);

 const completePayment = () => {
   alert(`Payment successful via ${method} for ₹${amount}`);
   clearCart();
 };

 return (
  <div>
   <h2>Payment</h2>
   <p>Amount: ₹{amount}</p>
   <select value={method} onChange={(e)=>setMethod(e.target.value)}>
    <option>UPI</option>
    <option>Cash</option>
    <option>Card</option>
   </select>
   <button onClick={completePayment}>Complete Payment</button>
  </div>
 );
}