const mongoose = require('mongoose');

var schema = mongoose.Schema(
    {
        Name:String,
        Age:Number,
        Dept:String,
        Sal:Number
    }
)
var Empmodel = mongoose.model("employee", schema);

module.exports = Empmodel;
