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
      Client_email: newJobData.Client_email, // Ensure client email is included
    };

    writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2), "utf8");
    console.log("Job appended!");
  } catch (error) {
    console.log("ERROR APPENDING JOB", error);
  }
}

// API endpoint to add a new client
app.post('/add-client', (req, res) => {
  const { client_name, client_email, client_phone_number, password, DOB, Emergency_Contact_Phone } = req.body;

  if (!client_name || !client_email || !client_phone_number || !password || !DOB || !Emergency_Contact_Phone) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const newClientData = {
    client_name,
    client_email,
    client_phone_number,
    password,
    DOB,
    Emergency_Contact_Phone
  };

  appendClientData(newClientData);

  res.status(200).json({ message: 'Client added!' });
});

app.post("/add-volunteer", (req, res) => {
  const {
    volunteer_name,
    volunteer_email,
    volunteer_password,
    volunteer_education,
    volunteer_phone_number,
  } = req.body;

  if (
    !volunteer_name ||
    !volunteer_email ||
    !volunteer_password ||
    !volunteer_phone_number
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const newVolunteerData = {
    volunteer_name,
    volunteer_email,
    volunteer_password,
    volunteer_education,
    volunteer_phone_number,
    volunteer_points: 0, // Default to 0
    volunteer_credentials_photo: "", // Default empty string
    what_jobs_they_enroll_in: [], // Default empty list
    average_rating: 0, // Default to 0
  };

  appendVolunteerData(newVolunteerData);

  res.status(200).json({ message: "Volunteer added!" });
});

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