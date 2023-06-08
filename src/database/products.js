const { ObjectId } = require("mongodb");
const db = require("./db");

// this will fetch the products from the database
const getAllProducts = async ()  => {

    return await db.products.find().toArray();

}

// get one product
const getProduct = async(id) => {

    return await db.products.findOne({_id: new ObjectId(id)  });
}

module.exports = {
    getAllProducts,
    getProduct
}