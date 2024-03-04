# App Documentation
## Database
MongoDB: 
This app utilizes MongoDB as its chosen database solution. MongoDB is a NoSQL database that provides flexibility and scalability, making it suitable for applications with varying data structures. In this app, MongoDB is employed to store information about users, devices, and scans.

It contains 3 Schemas: 

1. [User Schema](server/models/User.js)
2. [Device Schema](server/models/Device.js)
3. [Scan Schema](server/models/Scan.js)

I've chosen MongoDB due to its schema flexibility, JSON-like documents, and ability to handle large amounts of data efficiently.

## Backend

Express.js:
The backend of the app is built using Express.js, a Node.js web application framework. Express.js provides a robust set of features for building APIs, handling routes, and serving static files. The backend is responsible for interacting with the MongoDB database, implementing authentication using Passport.js, and exposing API endpoints for the frontend.

Authentication
The app uses Passport.js with a Local Strategy for user authentication. 

Passport.js simplifies the process of authenticating requests and provides a middleware for handling user sessions.

An example Protected Route:
```app.get('/api/user/profile', isAuthenticated, (req, res) => {
  res.json({ user: req.user });
});
```

## Frontend
React
The frontend is developed using React, a popular JavaScript library for building user interfaces. 
React enables the creation of modular and reusable components, facilitating the development of a dynamic and responsive dashboard.

You will notice a couple of files are .tsx instead of .js, this is because I believe using TypeScript can be incredibly powerful and helpful when working with a young codebase. It helps prevent errors in the future that tend to spawn from how loosely typed JS is. Using Type
Script initially means taking a bit of extra time when setting things up as there's a lot more to define but helps prevent headaches in the future, it is something I consider as a major improvement to any codebase I've worked on so far.

# Additional Information

The app is designed to provide administrators with a powerful dashboard to search and analyze employee device scans. It features a responsive design, making it accessible across various devices. Future updates will include additional features such as sorting by date or alphabetical order.

# Conclusion
This Markdown document serves as an introduction to the app's architecture, database structure, and technology stack. 