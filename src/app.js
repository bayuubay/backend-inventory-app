const express = require("express");
const routes = require("./routes");
const fileupload=require('express-fileupload')
module.exports = function mainApp(port) {
  const app = express();
  app.use(express.json());
  app.use(fileupload({useTempFiles:true}))
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", routes());

  app.listen(port, () => console.log(`app listen on port : ${port}`));
};
