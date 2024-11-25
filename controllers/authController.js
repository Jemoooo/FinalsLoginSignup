const User = require('../models/user');
const bcrypt = require('bcryptjs'); // Use bcryptjs for hashing
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('Test is working');
};

//Register Endpoint
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if name is entered
        if (!name) {
            return res.json({ error: 'Name is required' });
        }

        // Check if password is valid
        if (!password || password.length < 6) {
            return res.json({ error: 'Password must be at least 6 characters long' });
        }

        // Check if email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ error: 'Email is already taken' });
        }

        // Hash the password using bcryptjs
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        console.log('Hashed Password:', hashedPassword); // Log hashed password for debugging

        // Create and save the user with hashed password
        const user = new User({
            name,
            email,
            password: hashedPassword, // Use the hashed password here
        });

        // Save user to the database
        await user.save(); // Save to the database
        console.log('User saved:', user); // Log the saved user details for debugging

        // Respond with success message and user data (excluding password)
        res.json({ message: 'User registered successfully', user: { name, email } });
    } catch (error) {
        console.error('Registration Error:', error); // Log error for debugging
        res.json({ error: 'An error occurred during registration' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate email and password
        if (!email || !password) {
            return res.json({ error: 'Email and password are required' });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ error: 'User not found' });
        }

        // Compare the entered password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ error: 'Invalid credentials' });
        }

        jwt.sign ({ id: user._id, name: user.name, email: user.email }, process.env.JWT_Secret, {}, (err, token) => {
            if(err) throw err;
            res.cookie('token', token).json(user)
        });
    } catch (error) {
        console.error('Login Error:', error); // Log error for debugging
        res.json({ error: 'An error occurred during login' });
    }
};

module.exports = {
    test,
    registerUser,
    loginUser,
};
