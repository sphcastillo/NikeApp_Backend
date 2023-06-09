// only responsible for making connection to database
 const { MongoClient } = require('mongodb');

 const uri = 'mongodb+srv://sphcastillo:1oIQFSXYG4Gd3FHI@cluster0.bfdsmu4.mongodb.net/?retryWrites=true&w=majority';

 let client;

 const getDB = () => {

    // if client is null, only then create a new MongoClient
    // otherwise use the same that was already generated
    if(!client){
        console.log("Creating a new client!");
        client = new MongoClient(uri);
    }else {
        console.log("Re using the old client");
    }

    const database = client.db('test');
    const products = database.collection('products');
    const orders = database.collection('orders');

    return {
        products,
        orders,
    }
 }

 module.exports = getDB;