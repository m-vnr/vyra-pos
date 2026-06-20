import { useEffect, useState } from 'react';
import { getDashboardMetrics } from '../services/analyticsService';

export default function AnalyticsPage(){
 const [metrics,setMetrics] = useState<any>(null);

 useEffect(()=>{
  getDashboardMetrics().then(setMetrics);
 },[]);

 return (
  <div>
   <h1>Analytics Dashboard</h1>
   <p>Total Sales: ₹{metrics?.totalSales ?? 0}</p>
   <p>Total Orders: {metrics?.totalOrders ?? 0}</p>
  </div>
 );
}
