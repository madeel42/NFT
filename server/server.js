const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
var cors = require('cors')
mongoose.connect(
  "mongodb://adeel123:adeel123@devconnector-shard-00-00.pdmbx.mongodb.net:27017,devconnector-shard-00-01.pdmbx.mongodb.net:27017,devconnector-shard-00-02.pdmbx.mongodb.net:27017/nftitem?ssl=true&replicaSet=DevConnector-shard-0&authSource=admin&retryWrites=true&w=majority",
  (err, data) => {
    console.log(err || data);
    console.log("mongodb connected");
  }
);
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());
app.use(bodyParser.json());


app.use('/postData', require('./Routes/routes'))
app.use('/getSearchData', require('./Routes/getSearchData'))
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
