var mongoose = require("mongoose");
// mongoose.set('debug', true);
// mongoose.connect("mongodb://localHost/databasebills", { useNewUrlParser: true });
mongoose.connect("mongodb+srv://soumyojit:soumyojit@watchedmovies-zrpho.mongodb.net/test?retryWrites=true&w=majority",  { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = Promise;

module.exports.Bills = require("./database");
module.exports.BillsSS = require("./databasess");
module.exports.BillsASC = require("./databaseasc");