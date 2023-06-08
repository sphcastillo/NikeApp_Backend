// only responsible for making connection to database
 const { MongoClient } = require('mongodb');

 const uri = 'mongodb+srv://sphcastillo:1oIQFSXYG4Gd3FHI@cluster0.bfdsmu4.mongodb.net/?retryWrites=true&w=majority';

 const client = new MongoClient(uri);

 const database = client.db('test');
 const products = database.collection('products');

 module.exports = {
     products,
 }