export interface InventoryItem {
 id:string;
 name:string;
 quantity:number;
 unit:string;
 reorderLevel:number;
}

export async function getInventoryItems(): Promise<InventoryItem[]> {
 return [];
}

export async function updateStock(itemId:string, quantity:number){
 return { success:true, itemId, quantity };
}

export async function deductStock(itemId:string, quantity:number){
 return { success:true, itemId, quantity };
}
