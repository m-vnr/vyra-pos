export interface DashboardMetrics {
 totalSales:number;
 totalOrders:number;
 averageOrderValue:number;
 topSellingItems:string[];
}

export async function getDashboardMetrics(): Promise<DashboardMetrics> {
 return {
  totalSales:0,
  totalOrders:0,
  averageOrderValue:0,
  topSellingItems:[]
 };
}
