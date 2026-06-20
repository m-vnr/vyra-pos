import { useCartStore } from '../store/cartStore';
import { generateBill } from '../services/billingService';

export default function CartPanel(){
 const items = useCartStore((s:any)=>s.items);

 const subtotal = items.reduce((sum:number,item:any)=>sum + (item.price * item.qty),0);
 const bill = generateBill(subtotal,5,0);

 return (
  <div>
   <h2>Cart</h2>
   {items.map((item:any)=><div key={item.id}>{item.name} x {item.qty}</div>)}
   <hr />
   <p>Subtotal: ₹{bill.subtotal}</p>
   <p>CGST: ₹{bill.cgst}</p>
   <p>SGST: ₹{bill.sgst}</p>
   <p>Total: ₹{bill.grandTotal}</p>
  </div>
 );
}