const express = require('express');
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

app.use(cors());
const bodyParser = require("body-parser");
const routes = require("./api/routes/route");
const port = 80;

mongoose.connect("mongodb+srv://Kranthi:Kranthi123@cluster0.mwe6apw.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connection
    .once("open", () => console.log("connected"))
    .on("error", (error) => {
        console.log("MongoDB Error: " + error);
    });

routes(app);
app.listen(port, () => {
    console.log(`App started at port  ${port}`);
});