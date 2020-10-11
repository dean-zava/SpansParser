const express = require("express");
const bodyParser = require("body-parser")
const path = require("path");
const fs = require("fs")
const app = express();
app.use(express.static(path.join(__dirname, "build")));

const FILENAME = "./spans.json";

app.get("/get_span", function (req, res) {
    let conds = Object.values(req.query).map(cond => JSON.parse(cond))
    console.log(conds)
    console.log("received get request");

    let operand_to_lambda = {
        "<" : ((x,y) => x < y),
        ">" : ((x,y) => x > y),
        "=" : ((x,y) => x == y)
    }

    fs.readFile(FILENAME, "utf8" , (err, data) => {
        if (err) {
            console.error(err)
            return res.send({ error_msg: "Server internal error" });
        }

        let parsed_span = JSON.parse(data);
        // filter spans that stands in all conditions
        let filtered_spans = parsed_span.filter(span => conds.every(cond => {
            // if it is a field, check that the field stands in the condition
            if (span.hasOwnProperty(cond.field)) {
                return operand_to_lambda[cond.operator](span[cond.field], cond.val)
            }
            // if it is a tag check that the tag stands in the condition
            else {
                let selected_tag = span.tags.find(tag => tag.key === cond.field);
                if (selected_tag == undefined) {
                    return false;
                }
                else {
                    // take the value from the json that isn't the key
                    let key_for_val = Object.keys(selected_tag)[0] === "key" ?
                        Object.keys(selected_tag)[1] :
                        Object.keys(selected_tag)[0];
                    return operand_to_lambda[cond.operator](selected_tag[key_for_val], cond.val);
                }
            }
        }))
    
        return res.send({ spans: filtered_spans })
    })
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
