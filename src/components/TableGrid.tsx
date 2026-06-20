interface Table {
 id:string;
 name:string;
 status:'available'|'occupied';
}

export default function TableGrid(){
 const tables:Table[] = [];
 return (
  <div>
   <h2>Tables</h2>
   {tables.map(t => <div key={t.id}>{t.name} - {t.status}</div>)}
  </div>
 );
}
