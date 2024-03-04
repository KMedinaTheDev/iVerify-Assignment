import express from 'express';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import session from 'express-session';
import bodyParser from 'body-parser';

import User from './models/User';
import Device from './models/Devicel';
import Scan from './models/Scan';


const app = express();

// Use sessions to keep track of login state
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: false }));

// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());

// Use the local strategy for authentication
passport.use(
  new LocalStrategy(async (email, password, done) => {
    try {
      // Replace this with your actual user authentication logic
      const user = await User.findOne({ email });

      if (!user || user.password !== password) {
        return done(null, false, { message: 'Incorrect email or password' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

// Serialize user information to store in the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from the stored session data
passport.deserializeUser(async (id, done) => {
  try {
    // Replace this with your actual user retrieval logic
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// the server will accept JSON payloads up to 50 megabytes in size
app.use(bodyParser.json({ limit: '50mb' }));

//other middleware and routes go here

// Example protected route using Passport
app.get('/api/user/profile', isAuthenticated, (req, res) => {
  res.json({ user: req.user });
});

// Example login route
app.post('/api/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Login successful', user: req.user });
});

// Example logout route
app.get('/api/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Logout successful' });
});

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
}

// Your server setup continues here

// Start your server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
