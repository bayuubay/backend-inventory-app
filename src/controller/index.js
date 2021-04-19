const item=require('./items')
const customer=require('./customers')
const sales =require("./sales")
class Controller{
    item(){
        return item
    }
    customer(){
        return customer
    }
    sales(){
        return sales
    }
}

module.exports=Object.freeze(new Controller())