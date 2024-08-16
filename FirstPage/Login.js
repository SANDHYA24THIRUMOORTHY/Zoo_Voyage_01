import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import '../Dashboard/Lander.css';

const Login = ({ onSwitchToRegister }) => {
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate(); // Add useNavigate hook

  useEffect(() => {
    axios.get('http://localhost:8080/get')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = users.find(user => user.email === loginDetails.email && user.password === loginDetails.password);

    if (foundUser) {
      setUser(foundUser);
      navigate('/blog'); // Navigate to Dash page
    } else {
      alert('Account not found. Please register.');
      onSwitchToRegister(); // Switch to register form
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <div >
      <form onSubmit={handleLogin} >
        <h2>LOGIN</h2><br></br>
        <div className="form-group">
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={loginDetails.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={loginDetails.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <div className="register-link">
          <p>
            New User?{' '}
            <span 
              onClick={onSwitchToRegister}
              style={{ cursor: 'pointer', color: 'black' }}
            >
              Register here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
