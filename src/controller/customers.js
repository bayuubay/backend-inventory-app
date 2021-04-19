const Customer = require("../models/customer");
const cloudinary = require("cloudinary").v2;
// const streamifier = require("streamifier");
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
class CustController {
  async getAllCustomer(req, res) {
    const custData = await Customer.find();
    return res.json({
      message: "success",
      status_code: 200,
      result: custData,
    });
  }

  async getCustById(req, res) {
    const { id } = req.params;
    const custdata = await Customer.findOne({ _id: id });
    return res.json({
      message: "success",
      status_code: 200,
      result: custdata,
    });
  }

  async createCust(req, res) {
    let status_code = 500;
    try {
      const { name, contact, address, discount, discount_type } = req.body;
      const { file } = req.files;
      const uploadImage = await cloudinary.uploader.upload(file.tempFilePath);
      const id_card = uploadImage.secure_url;
      const payload = {
        name,
        contact,
        address,
        discount,
        discount_type,
        id_card,
      };
      const result = await Customer.create(payload);
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

  async updateCust(req, res) {
    const { id } = req.params;
    const payload = req.body;
    await Customer.updateOne({ _id: id }, payload);
    return res.json({
      message: "success",
      status_code: 200,
    });
  }

  async deleteCust(req, res) {
    const { id } = req.params;
    await Customer.deleteOne({ _id: id });
    return res.json({
      message: "success",
      status_code: 200,
    });
  }
}

module.exports = Object.freeze(new CustController());
