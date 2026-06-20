interface DashboardCardProps { title:string; value:string|number; }

function Card({title,value}:DashboardCardProps){
 return <div><h3>{title}</h3><p>{value}</p></div>;
}

export default function DashboardCards(){
 return (
  <div>
   <Card title='Sales Today' value='₹0' />
   <Card title='Orders Today' value='0' />
   <Card title='Customers' value='0' />
  </div>
 );
}
