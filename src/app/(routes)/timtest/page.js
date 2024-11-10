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
    fetch('/api/timtest') 
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