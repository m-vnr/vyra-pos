interface KOTItem { id:string; table:string; status:string; }

export default function KOTQueue(){
 const orders:KOTItem[] = [];
 return (
  <div>
   <h2>Kitchen Order Queue</h2>
   {orders.map(o => <div key={o.id}>{o.table} - {o.status}</div>)}
  </div>
 );
}
