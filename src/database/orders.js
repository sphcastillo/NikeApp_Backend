const { ObjectId } = require("mongodb");
const db = require("./db");

// find an order
const getOrder = async(ref) => {
    return await db.orders.findOne({ ref })
};

// create an order 

const createOrder = async(order) => {
    const result = await db.orders.insertOne(order);
    // return all data about the order
    return {...order, _id: result.insertedId};
};

module.exports = {
    getOrder,
    createOrder
}