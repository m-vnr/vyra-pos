export function calculateGST(subtotal:number,gstRate:number){
 const gst=(subtotal*gstRate)/100;
 return {
  cgst:gst/2,
  sgst:gst/2,
  total:subtotal+gst
 };
}
