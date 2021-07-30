const mongoose = require("mongoose")
const Insurance = new mongoose.Schema({
    "Policy_id": {
        type: String,
        required: false
      },
    "Date of Purchase": {
        type: Date,
        required: false
      },
    "Customer_id": {
        type: Number,
        required: false
      },
    "Fuel": {
        type: String
      },
    "VEHICLE_SEGMENT": {
        type: String
      },
    "Premium": {
        type: Number,
        required: false
      },
    "bodily injury liability": {
        type: Number,
        required: false
      },
    "personal injury protection": {
        type: Number,
        required: false
      },
    "property damage liability": {
        type: Number,
        required: false
      },
    "collision": {
        type: Number,
        required: false
      },
    "comprehensive": {
        type: Number,
        required: false
      },
    "Customer_Gender":{
        type: String,
        required: false
      },
    "Customer_Income group":{
        type: String,
        required: false
      },
    "Customer_Region":{
        type: String,
      },
    "Customer_Marital_Status":{
        type: Number,
      }
})

module.exports = mongoose.model("Insurance", Insurance,"Insurance")