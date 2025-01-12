const mongoose = require('mongoose');
var express = require('express');
const Data = require('../model/data');
const mseptiawan = (req,res)=>{
    const data = new Data({
        jenis_wisata: req.body.jenis_wisata,
        kota: req.body.kota,
    })
    console.log(data);
    data.save()
    .then((createdData)=>{
        res.status(201).json({
            message: 'Data berhasil disimpan',
            bookId: createdData._id,
        })
    })
}


module.exports = {create: mseptiawan};