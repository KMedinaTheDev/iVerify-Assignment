// List of users, goal: quickly find a corresponding user
//example: 
import React, { useState, useEffect } from 'react';


const UserList = ({ searchValue = '' }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterByName, setFilterByName] = useState(false);
  const [filterByDate, setFilterByDate] = useState(false);

  useEffect(() => {
    // Fetch user data from the backend API
    // api.get('/api/users')
    //   .then(response => setUsers(response.data))
    //   .catch(error => console.error('Error fetching users:', error));


  // Example data for testing
  const mockUsers = [
    { uid: 1, name: 'John Doe', email: 'john@example.com', date: '2022-03-15', devices: '4 devices' },
    { uid: 2, name: 'Jane Doe', email: 'jane@example.com', date: '2022-03-16', devices: '1 device' },
    // Add more users as needed
  ];


  setUsers(mockUsers);
  setFilteredUsers(mockUsers);
  }, []);

  useEffect(() => {
    // Filter users based on search term
    let filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Apply additional filters
    if (filterByName) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (filterByDate) {
      // Example: Replace '2022-03-15' with your actual date property
      filtered = filtered.filter(user =>
        user.date === '2022-03-15'
      );
    }

    setFilteredUsers(filtered);
  }, [searchValue, users, filterByName, filterByDate]);

  return (
    <div>
      <h2>User List</h2>
      <ul>
      {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <li key={user.uid}>{user.name} - {user.email} - {user.devices}</li>
          ))
        ) : (
          <p>Sorry, No Users are Listed yet. Start Adding Users, necessary Admin permissions required.</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;
