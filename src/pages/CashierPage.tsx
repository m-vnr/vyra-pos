import ProductGrid from '../components/ProductGrid';
import CartPanel from '../components/CartPanel';
import PaymentModal from '../components/PaymentModal';
import { useCartStore } from '../store/cartStore';

export default function CashierPage(){
 const items = useCartStore((s:any)=>s.items);

 return (
  <div>
   <h1>Cashier POS</h1>
   <p>Items in cart: {items.length}</p>
   <div>
    <ProductGrid />
    <CartPanel />
    <PaymentModal />
   </div>
  </div>
 );
}