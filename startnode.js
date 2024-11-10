const express = require('express');
const cors = require('cors');
const { writeFileSync } = require("fs");

const app = express();
const port = 5000; // You can choose any port

app.use(cors());

const path = "data.json";

const adding_data_test = {};

try {
    writeFileSync(path, JSON.stringify(adding_data_test, null, 2), "utf8");
    console.log("Data successfully saved");
} catch (error) {
    console.log("An error has occurred ", error);
}



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
