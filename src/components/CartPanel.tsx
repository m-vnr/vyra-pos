import { useCartStore } from '../store/cartStore';

export default function CartPanel(){
 const items = useCartStore((s:any)=>s.items);
 return (
  <div>
   <h2>Cart</h2>
   {items.map((item:any)=><div key={item.id}>{item.name} x {item.qty}</div>)}
  </div>
 );
}
