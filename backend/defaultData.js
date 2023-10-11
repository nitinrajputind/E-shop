const productData = require('./constant/productData');
const PRODUCTS = require('./model/productSchema');

const defaultData = async()=>{
    try{
        await PRODUCTS.deleteMany({})
        const storeData = await PRODUCTS.insertMany(productData);
    }catch(err){
        console.log(`Error is found inserting Data ${err}`);
    }
}

module.exports = defaultData