const express = require("express");
const csv = require('csv-parser');
const fs = require('fs');
let results = [];
const app = express();

app.get("/", function(request, response){
    fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            response.send(JSON.stringify(results));
        });
});

app.listen(3000);
