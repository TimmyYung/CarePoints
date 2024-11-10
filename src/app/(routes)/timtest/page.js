"use client"; 

import { useState, useEffect } from "react";

const TimTest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [newClientName, setNewClientName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newClientPhoneNumber, setNewClientPhoneNumber] = useState('');
  const [newClientPassword, setNewClientPassword] = useState('');
  const [newVolunteerName, setNewVolunteerName] = useState('');
  const [newVolunteerEmail, setNewVolunteerEmail] = useState('');
  const [newVolunteerPassword, setNewVolunteerPassword] = useState('');
  const [newVolunteerEducation, setNewVolunteerEducation] = useState('');
  const [newVolunteerPhoneNumber, setNewVolunteerPhoneNumber] = useState('');
  const [newJobServiceName, setNewJobServiceName] = useState('');
  const [newJobDescription, setNewJobDescription] = useState('');

  useEffect(() => {
    fetch('/api/timtest') // assuming you have an endpoint set up at this URL
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      });
  });
  // Function to handle form submission and send data to Node.js backend
  const handleAddClient = async (e) => {
    e.preventDefault();

    if (newClientName && newClientEmail && newClientPhoneNumber && newClientPassword) {
      const newClient = {
        client_name: newClientName,
        client_email: newClientEmail,
        client_phone_number: newClientPhoneNumber,
        password: newClientPassword,
      };

      try {
        // Send POST request to Node.js backend
        const response = await fetch('http://localhost:5000/add-client', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newClient),
        });

        if (!response.ok) {
          throw new Error('Failed to add client');
        }

        // Clear input fields after successful submission
        setNewClientName('');
        setNewClientEmail('');
        setNewClientPhoneNumber('');
        setNewClientPassword('');

        // Optionally refetch or update state with new client list
        fetch('/api/timtest')
          .then((response) => response.json())
          .then((jsonData) => setData(jsonData));
        
      } catch (error) {
        console.error('Error adding client:', error);
      }
    }
  };

  const handleAddVolunteer = async (e) => {
    e.preventDefault();
  
    if (newVolunteerName && newVolunteerEmail && newVolunteerPassword && newVolunteerPhoneNumber) {
      const newVolunteer = {
        volunteer_name: newVolunteerName,
        volunteer_email: newVolunteerEmail,
        volunteer_password: newVolunteerPassword,
        volunteer_education: newVolunteerEducation,
        volunteer_phone_number: newVolunteerPhoneNumber,
        volunteer_points: 0,
        volunteer_credentials_photo: "",
        what_jobs_they_enroll_in: [],
        average_rating: 0
      };
  
      try {
        const response = await fetch('http://localhost:5000/add-volunteer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newVolunteer),
        });
  
        if (!response.ok) {
          throw new Error('Failed to add volunteer');
        }
  
        setNewVolunteerName('');
        setNewVolunteerEmail('');
        setNewVolunteerPassword('');
        setNewVolunteerEducation('');
        setNewVolunteerPhoneNumber('');
  
        fetch('/api/timtest')
          .then((response) => response.json())
          .then((jsonData) => setData(jsonData));
        
      } catch (error) {
        console.error('Error adding volunteer:', error);
      }
    }
  };

  const handleAddJob = async (e) => {
    e.preventDefault();

    if (newJobServiceName && newJobDescription) {
      const newJob = {
        service_name: newJobServiceName,
        description: newJobDescription,
      };

      try {
        const response = await fetch('http://localhost:5000/add-job', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newJob),
        });

        if (!response.ok) {
          throw new Error('Failed to add job');
        }

        setNewJobServiceName('');
        setNewJobDescription('');

        fetch('/api/timtest')
          .then((response) => response.json())
          .then((jsonData) => setData(jsonData));
        
      } catch (error) {
        console.error('Error adding job:', error);
      }
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Clients List</h1>
      {Object.keys(data.client).map((clientId) => (
        <div key={clientId}>
          <h2>Client Name: {data.client[clientId].client_name}</h2>
          <p>Email: {data.client[clientId].client_email}</p>
          <p>Phone: {data.client[clientId].client_phone_number}</p>
          <p>Password: {data.client[clientId].password}</p>
        </div>
      ))}

      {/* Form to add a new client */}
      <form onSubmit={handleAddClient}>
        <h2>Add New Client</h2>
        <label>
          Name:
          <input
            type="text"
            value={newClientName}
            onChange={(e) => setNewClientName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={newClientEmail}
            onChange={(e) => setNewClientEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            value={newClientPhoneNumber}
            onChange={(e) => setNewClientPhoneNumber(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type="text"
            value={newClientPassword}
            onChange={(e) => setNewClientPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Client</button>
      </form>

      {/* Form to add a volunteer */}
      <form onSubmit={handleAddVolunteer}>
        <h2>Add New Volunteer</h2>
        <label>
          Name:
          <input
            type="text"
            value={newVolunteerName}
            onChange={(e) => setNewVolunteerName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={newVolunteerEmail}
            onChange={(e) => setNewVolunteerEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={newVolunteerPassword}
            onChange={(e) => setNewVolunteerPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Education:
          <input
            type="text"
            value={newVolunteerEducation}
            onChange={(e) => setNewVolunteerEducation(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            value={newVolunteerPhoneNumber}
            onChange={(e) => setNewVolunteerPhoneNumber(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Volunteer</button>
      </form>

      {/* Form to add job postings */}
      <form onSubmit={handleAddJob}>
        <h2>Add New Job</h2>
        <label>
          Service Name:
          <input
            type="text"
            value={newJobServiceName}
            onChange={(e) => setNewJobServiceName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={newJobDescription}
            onChange={(e) => setNewJobDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default TimTest;