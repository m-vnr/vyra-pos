interface Product {
 id:string;
 name:string;
 price:number;
}

export default function ProductGrid(){
 const products:Product[] = [];
 return (
  <div>
   <h2>Menu Items</h2>
   {products.map(p => <div key={p.id}>{p.name} - ₹{p.price}</div>)}
  </div>
 );
}
