var mongoose = require("mongoose");

var billSchema = new mongoose.Schema({
    invoicenumber:  { type: String, required: true },
    invoicedate:    { type: String },
    gstin:          [{ type: String }],
    name:           [{ type: String }],
    address1:       [ { type: String } ],
    address2:       [ { type: String } ],
    address3:       [ { type: String } ],
    state:          [{ type: String , default: "West Bengal"}],
    ordernumber:    { type: String },
    orderdate:      { type: String },
    product:        [{ type: String }], 
    productdescription: [{ type: String }],
    hsn:            [{ type: Number }],
    quantity:       [{ type: Number }],
    discountrate:   [{ type: Number }],
    discountamount:  [{ type: Number }],
    rate:           [{ type: Number }],
    amount:         { type: Number },
    gstrate:        { type: Number },
});

var BillsASC = mongoose.model('DatabaseBillsforasc', billSchema);

module.exports = BillsASC;