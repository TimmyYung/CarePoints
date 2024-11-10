const express = require('express');
const cors = require('cors');
const { writeFileSync, readFileSync } = require("fs");
const path = require("path");

const app = express();
const port = 5000; 

app.use(cors());
app.use(express.json());

const dataFilePath = path.join(__dirname, "/src/app/(routes)/timtest/data.json");


function appendClientData(newClientData) {
    try {
        const fileData = readFileSync(dataFilePath, "utf8");
        const jsonData = JSON.parse(fileData);

        const newClientId = Object.keys(jsonData.client).length + 1;
        jsonData.client[newClientId] = newClientData;

        writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2), "utf8");
        console.log("It appended!");
    } catch (error) {
        console.log("ERROR APPENDING PLZ HELP", error);
    }
}

// API endpoint to add a new client
app.post('/add-client', (req, res) => {
    const { client_name, password, client_email, client_phone_number } = req.body;

    if (!client_name || !password || !client_email || !client_phone_number) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const newClientData = {
        client_name,
        password,
        client_email,
        client_phone_number
    };

    // Append the new client data
    appendClientData(newClientData);

    res.status(200).json({ message: 'Client added!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
