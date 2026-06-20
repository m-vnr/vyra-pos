export interface InvoiceData {
 invoiceNumber:string;
 orderId:string;
 subtotal:number;
 cgst:number;
 sgst:number;
 grandTotal:number;
}

export async function createInvoice(invoice:InvoiceData){
 return { success:true, invoice };
}
