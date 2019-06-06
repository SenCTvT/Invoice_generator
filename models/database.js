var mongoose = require("mongoose");

var billSchema = new mongoose.Schema({
    invoicenumber:  { type: String, required: true },
    invoicedate:    { type: String },
    gstin:     [{ type: String }],
    name:      [{ type: String }],
    address1:       [ { type: String } ],
    address2:       [ { type: String } ],
    vehiclenumber:  { type: String },
    transportmode:  { type: String },
    placeofsupply:  { type: String, default: "West Bengal" },
    statecode:      { type: Number, default: "19" },
    ordermode:      { type: String, default: "verbal" },
    ordernumber:    { type: String, default: "No" },
    reversecharge:  { type: String, default: "No" },
    product:        [{ type: String }], 
    hsn:            [{ type: Number }],
    quantity:       [{ type: Number }],
    unit:           [{ type: String, default: "KGS"}],
    rate:           [{ type: Number }],
    amount:         { type: Number },
    date:           { type: Date, default: Date.now }
    
});

var Bills = mongoose.model('DatabaseBills', billSchema);

module.exports = Bills;