const express = require("express");
const app = express();
//const csv = require('csvtojson')
const mongoose = require("mongoose");
require("./schema");

const Insurance = mongoose.model("Insurance");

app.use(express.json());

function connectDataBase() {
  const url =
    "mongodb+srv://vinay:vinay@cluster0.o4e6l.mongodb.net/Insurance?retryWrites=true&w=majority";
  mongoose
    .connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
    .catch((error) => {});
  mongoose.connection.on("connected", () => console.log("Connected to DB "));
  mongoose.connection.on("error", (err) => {
    console.log("Error connecting ", err.code);
  });
}

connectDataBase(); // Connect to database

//Getting request on /getdata
app.get("/getdata", (request, resp) => {
  Insurance.find().then((out) => {
    resp.status(200).json({ data: out });
  });
});

//Fetch single record matching CustomerId and PolicyId
app.get("/getpolicy", (req, res) => {
  Insurance.find({
    $and: [
      { Customer_id: req.headers.customerid },
      { Policy_id: req.headers.policyid },
    ],
  })
    .then((response) => {
      return res.json(response.length > 0 ? response : "No record Found");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Update Single Policy
app.post("/updatepolicy", (req, resp) => {
  let newEntry = {
    Fuel: req.body["Fuel"],
    VEHICLE_SEGMENT: req.body["VEHICLE_SEGMENT"],
    Premium: req.body["Premium"],
    "bodily injury liability": req.body["bodily injury liability"],
    " personal injury protection": req.body[" personal injury protection"],
    " property damage liability": req.body[" property damage liability"],
    " collision": req.body[" collision"],
    " comprehensive": req.body[" comprehensive"],
    Customer_Gender: req.body["Customer_Gender"],
    "Customer_Income group": req.body["Customer_Income group"],
    Customer_Region: req.body["Customer_Region"],
    Customer_Marital_Status: req.body["Customer_Marital_Status"],
  };
  Insurance.updateOne(
    {
      $and: [
        { Policy_id: req.headers.policyid },
        { Customer_id: req.headers.customerid },
      ],
    },
    newEntry,
    {
      upsert: false,
    }
  )
    .then((response) => {
      return resp.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Starting the app to listen on port 5000
app.listen(5000, () => {
  console.log("Server is running");
});
