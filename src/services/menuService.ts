export interface MenuItem {
 id:string;
 name:string;
 price:number;
 category:string;
}

export async function getMenuItems(): Promise<MenuItem[]> {
 return [
  { id:'1', name:'Veg Biryani', price:180, category:'Main Course' },
  { id:'2', name:'Chicken Biryani', price:240, category:'Main Course' }
 ];
}
