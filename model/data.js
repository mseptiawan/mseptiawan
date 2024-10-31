const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    jenis_wisata : {type:String,required:true},
    kota : {type:String,required:true},
})

module.exports = mongoose.model("data", dataSchema);