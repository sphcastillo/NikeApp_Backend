const { ObjectId } = require("mongodb");
const getDB = require("./db");

// this will fetch the products from the database
const getAllProducts = async ()  => {

    return await getDB().products.find().toArray();

}

// get one product
const getProduct = async(id) => {

    return await getDB().products.findOne({_id: new ObjectId(id)  });
}

module.exports = {
    getAllProducts,
    getProduct
}