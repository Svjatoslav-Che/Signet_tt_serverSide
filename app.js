const express = require("express");
const csv = require('csv-parser');
const fs = require('fs');
const cors = require('cors')
let results = [];
const app = express();

app.use(cors())

fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        return results;
    });

app.get("/", function(request, response){
            response.json(results);
});

app.listen(3000);
