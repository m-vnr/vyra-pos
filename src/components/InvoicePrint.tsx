interface InvoiceProps {
 invoiceNo?: string;
 total?: number;
}

export default function InvoicePrint({invoiceNo='INV-001',total=0}:InvoiceProps){
 return (
  <div>
   <h2>Tax Invoice</h2>
   <p>Invoice: {invoiceNo}</p>
   <p>Total: ₹{total}</p>
  </div>
 );
}
