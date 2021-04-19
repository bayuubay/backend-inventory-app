const Item = require("../models/items");
const cloudinary = require("cloudinary").v2;
// const streamifier = require("streamifier");
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

class ItemController {
  async getAllItems(req, res) {
    const dataItem = await Item.find();
    return res.json({
      message: "success",
      status_code: 200,
      result: dataItem,
    });
  }

  async getItemById(req, res) {
    const { id } = req.params;
    const dataItem = await Item.findOne({ _id: id });
    return res.json({
      message: "success",
      status_code: 200,
      result: dataItem,
    });
  }

  async createItem(req, res) {
    let status_code = 500;
    try {
      const { name, unit, stock, price } = req.body;
      const { file } = req.files;
      const uploadImage = await cloudinary.uploader.upload(file.tempFilePath);
      const item_image = uploadImage.secure_url;
      const payload = {
        name,
        unit,
        stock,
        price,
        item_image,
      };
      const result = await Item.create(payload);
      return res.json({
        message: "success",
        status_code: 201,
        result,
      });
    } catch (error) {
      console.log(error);
      console.log("something wrong");
    }
  }

  async updateItem(req, res) {
    const { id } = req.params;
    const { name, unit, stock, price } = req.body;
    const payload = {
      name,
      unit,
      stock,
      price,      
    };
    await Item.updateOne({ _id: id }, payload);
    return res.json({
      message: "success",
      status_code: 200,
    });
  }

  async deleteItem(req, res) {
    const { id } = req.params;
    await Item.deleteOne({ _id: id });
    return res.json({
      message: "success",
      status_code: 200,
    });
  }
}

module.exports = Object.freeze(new ItemController());
