import axios from 'axios';
import React, { useState } from 'react';

const LoginView = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("click!")
      await login(username, password);
      // Update isLoggedIn state in the parent component
      setLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const login = async (username, password) => {
      try {
        const response = await axios.post('http://localhost:3000/user/login', { username, password });
        const { token } = response.data;
        console.log(`token is ${token}`)
        localStorage.setItem("token", token)
      } catch (error) {
        console.error('Login failed:', error);
      }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
