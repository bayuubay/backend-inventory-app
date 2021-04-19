const Sales = require("../models/transaction");
const Customer = require("../models/customer");
const Item = require("../models/items");
class SalesController {
  async createSales(req, res) {
    const { cust_id, items, trx_date } = req.body;
    const dataCust = await Customer.findOne({ _id: cust_id });
    // console.log(items)
    const itemArray = items.map((x) => {
      return x.items_id;
    });
    let arr=[]
    const totalPrice=itemArray.forEach(async (element) => {
      let a = await Item.findOne({ _id: element });      
     
      arr.push(a.price)
    //   return sumPrice
    //   console.log(arr);
      return arr
     
    });
    console.log(totalPrice)
    
    // const payload={
    //     trx_date,
    //     cust_id,
    //     items:[
    //         {
    //             items_id,
    //             qty,
    //         }
    //     ],
    //     total_disc:,
    //     total_cost,
    //     total_payment
    // }
    // const dataSales=await Sales.create({

    // })
    return;
  }
}

module.exports = Object.freeze(new SalesController());
