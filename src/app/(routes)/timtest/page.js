"use client"; 

import { useState, useEffect } from "react";

const TimTest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [newClientName, setNewClientName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newClientPhoneNumber, setNewClientPhoneNumber] = useState('');
  const [newClientPassword, setNewClientPassword] = useState('');

  // FETCHING DATA FROM API ROUTE
  useEffect(() => {
    fetch('/api/timtest') // Fetch from your API route
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
  }, []);

  // Text fields to enter into JSON
  const handleAddClient = (e) => {
    e.preventDefault();

    if (newClientName && newClientEmail && newClientPhoneNumber && newClientPassword) {
      const newClientId = Object.keys(data.client).length + 1;
      const newClient = {
        client_name: newClientName,
        client_email: newClientEmail,
        client_phone_number: newClientPhoneNumber,
        password: newClientPassword,
      };

      // Update the client data in state
      setData((prevData) => ({
        ...prevData,
        client: {
          ...prevData.client,
          [newClientId]: newClient,
        },
      }));

      // Clear input fields
      setNewClientName('');
      setNewClientEmail('');
      setNewClientPhoneNumber('');
      setNewClientPassword('');
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
    </div>
  );
};

export default TimTest;
