// List of all scans, goal: quickly find all scans for a device / or user

import React, { useState, useEffect } from 'react';


const ScanList = () => {
  const [scans, setScans] = useState([]);

  useEffect(() => {
    // Fetch scan data from the backend API
    // api.get('/api/scans')
    //   .then(response => setScans(response.data))
    //   .catch(error => console.error('Error fetching scans:', error));
  }, []);

  return (
    <div>
      <h2>Scan List</h2>
      <ul>
        {scans.total > 0 ? scans.map(scan => (
          <li key={scan.id}>
            User: {scan.user.name} - Device: {scan.device.model} - OS Version: {scan.osVersion} - Secure: {scan.secure.toString()}
          </li>
        )) : <p>Sorry, No Scans are Listed yet. Start Adding Scans manually, please note the necessary Admin permissions required.</p> }
      </ul>
    </div>
  );
};

export default ScanList;
