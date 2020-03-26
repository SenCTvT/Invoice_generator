var mongoose = require("mongoose");

var billSchema = new mongoose.Schema({
    invoicenumber:  { type: String, required: true },
    invoicedate:    { type: String },
    gstin:          [{ type: String }],
    name:           [{ type: String }],
    address1:       [ { type: String } ],
    address2:       [ { type: String } ],
    state:          [{ type: String , default: "West Bengal"}],
    code:           [{ type: String , default: "19"}],
    vehiclenumber:  { type: String },
    transportname:  { type: String, default: "Regular" },
    placeofsupply:  { type: String, default: "West Bengal" },
    statecode:      { type: Number, default: "19" },
    ordermode:      { type: String, default: "verbal" },
    product:        [{ type: String }], 
    hsn:            [{ type: Number }],
    quantity:       [{ type: Number }],
    unit:           [{ type: String, default: "KGS"}],
    rate:           [{ type: Number }],
    amount:         { type: Number },
    gstrate:        { type: Number },
    date:           { type: Date, default: Date.now }
});

var BillsSS = mongoose.model('DatabaseBillsforss', billSchema);

module.exports = BillsSS;