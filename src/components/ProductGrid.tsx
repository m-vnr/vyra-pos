import { useCartStore } from '../store/cartStore';

interface Product {
 id:string;
 name:string;
 price:number;
}

export default function ProductGrid(){
 const addItem = useCartStore((s:any)=>s.addItem);

 const products:Product[] = [
  {id:'1',name:'Veg Biryani',price:180},
  {id:'2',name:'Chicken Biryani',price:240}
 ];

 return (
  <div>
   <h2>Menu Items</h2>
   {products.map(p => (
    <button key={p.id} onClick={()=>addItem({...p,qty:1})}>
      {p.name} - ₹{p.price}
    </button>
   ))}
  </div>
 );
}