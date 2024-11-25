import React, { useState } from 'react';
import './LoginSignup.css'; // Reuse your CSS
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = ({ onSwitch }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    try {
      // If you're using the proxy setup in package.json, use the relative URL like this:
      const { data } = await axios.post('/register', {
        name,
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setFormData({}); // Reset form data after successful registration
        toast.success('Registration Successful. Please Log In!');
        navigate('login'); // Navigates to login page after successful signup
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <div className="login-container">
          <div className="login-header">
            <div className="login-text">Sign Up</div>
            <div className="login-underline"></div>
          </div>
          <div className="login-inputs">
            <div className="login-input">
              <img src="/images/person.png" alt="" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="login-input">
              <img src="/images/email.png" alt="" />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="login-input">
              <img src="/images/password.png" alt="" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="login-submit-container">
            <button type="submit" className="login-submit">
              Sign Up
            </button>
            <div className="login-submit login-gray" onClick={onSwitch}>
              Log in
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
