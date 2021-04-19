const router = require("express").Router();
const controller = require("./controller");
const multer = require("multer");
const upload = multer();
module.exports = function rt() {
  //item route
  router.get("/items" /**to controller */, controller.item().getAllItems);
  router.get("/item/:id" /**to controller */, controller.item().getItemById);
  router.post(
    "/item",
    // /**to controller */ upload.single("file"),
    controller.item().createItem
  );
  router.put("/item/:id" /**to controller */, controller.item().updateItem);
  router.delete("/item/:id" /**to controller */, controller.item().deleteItem);

  //customer route
  router.get("/customers" /**to controller */,controller.customer().getAllCustomer);
  router.get("/customer/:id" /**to controller */,controller.customer().getCustById);
  router.post("/customer" /**to controller */,controller.customer().createCust);
  router.put("/customer/:id" /**to controller */,controller.customer().updateCust);
  router.delete("/customer/:id" /**to controller */,controller.customer().deleteCust);

  //sales route
  router.post("/sales" /**to controller */,controller.sales().createSales);
  router.get("/sale" /**to controller */);
  router.put("/sale/:id" /**to controller */);
  router.delete("/sale/:id" /**to controller */);

  return router;
};
