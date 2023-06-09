const getDB = require("./db");

// find an order
const getOrder = async(ref) => {
    return await getDB().orders.findOne({ ref })
};

// create an order 

const createOrder = async(order) => {
    const result = await getDB().orders.insertOne(order);
    // return all data about the order
    // new id for new generated item - let's take it 
    return {...order, _id: result.insertedId};
};

module.exports = {
    getOrder,
    createOrder
}