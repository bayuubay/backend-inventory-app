const app = require("./src/app");
const mongoConnect=require('./src/mongoose');
(async () => {
  try {
    await mongoConnect
    app(process.env.PORT || 3001);
  } catch (error) {
    console.log(error);
    console.log("something went wrong!");
  }
})();
