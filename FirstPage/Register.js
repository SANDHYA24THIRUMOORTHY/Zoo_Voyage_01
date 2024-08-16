import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';
import '../Dashboard/Lander.css';


const Register = ({ onSwitchToLogin }) => {
  const navigate = useNavigate(); // Initialize navigate hook
  const [confirm, setConfirm] = useState('');
  const [signupDetails, setSignupDetails] = useState({
    username: '',
    contact: '',
    email: '',
    password: '',
  });
  const { setUser } = useContext(UserContext);

  const checkUserExists = async (username) => {
    const response = await axios.get('http://localhost:8080/get');
    return response.data.some((user) => user.username === username);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const userExists = await checkUserExists(signupDetails.username);
    if (userExists) {
      alert('User already exists. Redirecting to login...');
      onSwitchToLogin(); // Switch to login form
      return;
    }

    if (confirm !== signupDetails.password) {
      alert('Password and Confirm Password are not the same...');
      return;
    }

    axios
      .post('http://localhost:8080/insert', signupDetails)
      .then((response) => {
        setUser(response.data); // Set user details in context
        navigate('/blog'); // Redirect to the blog page after successful registration
      })
      .catch((error) => {
        console.error('Signup error:', error);
      });
  };

  const handleInputChange = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  const handleConfirmPassword = (e) => {
    setConfirm(e.target.value);
  };

  return (
    <div >
      <form onSubmit={handleRegister} >
        <h2>REGISTER</h2><br></br>
        <div className="form-group">
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={signupDetails.username}
            onChange={handleInputChange}
            pattern="[a-zA-Z]*"
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Mobile Number"
            type="tel"
            name="contact"
            value={signupDetails.contact}
            onChange={handleInputChange}
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={signupDetails.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={signupDetails.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirm}
            onChange={handleConfirmPassword}
            required
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
        <div className="login-link">
          <p>
            Already have an account?{' '}
            <span
              onClick={onSwitchToLogin}
              style={{ cursor: 'pointer', color: 'black' }}
            >
              Login here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
