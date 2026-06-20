import { useState } from 'react';

export default function PaymentModal(){
 const [amount,setAmount] = useState(0);
 const [method,setMethod] = useState('UPI');

 return (
  <div>
   <h2>Payment</h2>
   <input type='number' value={amount} onChange={(e)=>setAmount(Number(e.target.value))} />
   <select value={method} onChange={(e)=>setMethod(e.target.value)}>
    <option>UPI</option>
    <option>Cash</option>
    <option>Card</option>
   </select>
   <button>Complete Payment</button>
  </div>
 );
}
