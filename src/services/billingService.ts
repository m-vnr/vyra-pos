export interface BillSummary {
 subtotal:number;
 cgst:number;
 sgst:number;
 discount:number;
 grandTotal:number;
}

export function generateBill(subtotal:number, gstRate:number, discount:number=0): BillSummary {
 const taxable = subtotal - discount;
 const gst = (taxable * gstRate) / 100;
 return {
  subtotal,
  cgst: gst/2,
  sgst: gst/2,
  discount,
  grandTotal: taxable + gst
 };
}
