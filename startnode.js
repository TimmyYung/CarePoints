const express = require("express");
const cors = require("cors");
const { writeFileSync, readFileSync } = require("fs");
const path = require("path");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const dataFilePath = path.join(
  __dirname,
  "/src/app/(routes)/timtest/data.json"
);

function appendClientData(newClientData) {
  try {
    const fileData = readFileSync(dataFilePath, "utf8");
    const jsonData = JSON.parse(fileData);
    const newClientId = Object.keys(jsonData.client).length + 1;
    jsonData.client[newClientId] = {
      client_name: newClientData.client_name,
      password: newClientData.password,
      client_email: newClientData.client_email,
      client_phone_number: newClientData.client_phone_number,
      DOB: newClientData.DOB,
      Emergency_Contact_Phone: newClientData.Emergency_Contact_Phone,
    };
    writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2), "utf8");
    console.log("It appended!");
  } catch (error) {
    console.log("ERROR APPENDING PLZ HELP", error);
  }
}

function appendVolunteerData(newVolunteerData) {
  try {
    const fileData = readFileSync(dataFilePath, "utf8");
    const jsonData = JSON.parse(fileData);
    const newVolunteerId = Object.keys(jsonData.Volunteer).length + 1;
    jsonData.Volunteer[newVolunteerId] = {
      ...newVolunteerData,
      Volunteer_postal_code: newVolunteerData.Volunteer_postal_code, // Add postal code
    };
    writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2), "utf8");
    console.log("Volunteer appended!");
  } catch (error) {
    console.log("ERROR APPENDING VOLUNTEER", error);
  }
}

function appendJobData(newJobData) {
    try {
        const fileData = readFileSync(dataFilePath, "utf8");
        const jsonData = JSON.parse(fileData);

        const newJobId = Object.keys(jsonData.Job_page).length + 1;
        jsonData.Job_page[newJobId] = {
            ...newJobData,
            Client_email: newJobData.client_email, // Ensure client email is included
        };

        writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2), "utf8");
        console.log("Job appended!");
    } catch (error) {
        console.log("ERROR APPENDING JOB", error);
    }
}

app.post("/add-job", (req, res) => {
    const { description, categories, volunteers_needed, postal_code, points_per_job, hours_expected, client_email } = req.body;

    if (!description || !categories || !volunteers_needed || !postal_code || !points_per_job || !hours_expected || !client_email) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const newJobData = {
        description,
        categories,
        volunteers_needed,
        postal_code,
        points_per_job,
        hours_expected,
        client_email
    };

    appendJobData(newJobData);

    res.status(200).json({ message: "Job added!" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});