// Import necessary modules
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); // MongoDB ODM
const bcrypt = require('bcryptjs'); // For password hashing
const cookieParser = require('cookie-parser');

// Initialize Express app
const app = express();

// Use environment variable or fallback to port 6000
const port = 6000;

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:3000', // Allow requests from React frontend
    credentials: true, // If you are sending cookies or using sessions
  })
);
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

// MongoDB Connection
const mongoURI = "mongodb+srv://jemuelsantiago:RxBwVWidbQUGz6q0@cluster0.dicog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB Atlas URI

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Mongoose User Schema and Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Register Route
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (name && email && password) {
    try {
      // Hash the password before saving to the database
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: hashedPassword });

      await newUser.save(); // Save user to MongoDB
      res.status(201).json({ message: 'Registration successful', user: { name, email } }); // Exclude password in response
    } catch (err) {
      if (err.code === 11000) { // Duplicate email error
        res.status(400).json({ error: 'Email already exists' });
      } else {
        res.status(500).json({ error: 'Error saving user', details: err.message });
      }
    }
  } else {
    res.status(400).json({ error: 'Missing fields' });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }

      // Compare entered password with hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }

      res.status(200).json({ message: 'Login successful', user: { name: user.name, email: user.email } }); // Exclude password in response
    } catch (err) {
      res.status(500).json({ error: 'Error during login', details: err.message });
    }
  } else {
    res.status(400).json({ error: 'Missing email or password' });
  }
});
