const express = require("express");
const bodyParser = require("body-parser")
const path = require("path");
const fs = require("fs")
const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", function (req, res) {
    let conds = Object.values(req.query);

    console.log("received get request");
    console.log(conds)

    fs.readFile("spans.json", "utf8" , (err, data) => {
        if (err) {
            console.error(err)
            res.send(error_msg: "Server internal error");
            return;
        }

        JSON.parse(data)
    })

    return res.send("pong");
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
