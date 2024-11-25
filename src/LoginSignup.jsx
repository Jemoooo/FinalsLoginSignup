import React, { useState } from 'react';
import Login from './Login'; // Import your Login component
import Signup from './Signup'; // Import your Signup component

const AuthForm = () => {
  const [currentForm, setCurrentForm] = useState('Login'); // Default is Login

  const switchForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      {currentForm === 'Login' ? (
        <Login onSwitch={() => switchForm('SignUp')} />
      ) : (
        <Signup onSwitch={() => switchForm('Login')} />
      )}
    </div>
  );
};

export default AuthForm;
