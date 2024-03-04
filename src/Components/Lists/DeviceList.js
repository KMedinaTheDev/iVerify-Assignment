// List of devices, goal: quickly find a corresponding device

import React, { useState, useEffect } from 'react';


const DeviceList = () => {
  const [devices, setDevices] = useState([]);
  const [filteredDevices, setFilteredDevices] = useState([]);

  useEffect(() => {
    // Fetch device data from the backend API
    // api.get('/api/devices')
    //   .then(response => setDevices(response.data))
    //   .catch(error => console.error('Error fetching devices:', error));

    const mockDevices = [
      { uid: 12345, owner: 'John Doe', model: 'Samsung Galaxy S24 Ultra', date: '2024-03-15', OS: 'Android 14' },
      { uid: 11111, owner: 'John Doe', model: 'Samsung Galaxy A15 5G', date: '2024-03-15', OS: 'Android 12' },
      { uid: 22222, owner: 'John Doe', model: 'Samsung Galaxy S243 FE 5G',  date: '2024-03-15', OS: 'Android 14' },
      { uid: 33333, owner: 'John Doe', model: 'Samsung Galaxy A54 5G,',  date: '2024-03-15', OS: 'Android 14' },
      { uid: 23451, owner: 'Jane Doe', model: 'iPhone 11 maxPro', date: '2024-03-16', OS: 'iOS 17' },
      // Add more users as needed
    ];

    setDevices(mockDevices);
  setFilteredDevices(mockDevices);
  }, []);

  return (
    <div>
      <h2>Device List</h2>
      <ul>
        { devices.length > 0 ? devices.map(device => (
          <li key={device.id}>{device.model} - {device.uid} - {device.OS} - {device.owner} - {device.date}</li>
        )) : <p>Sorry, No Devices are Listed yet. Coming soon!</p> }
      </ul>
    </div>
  );
};

export default DeviceList;
