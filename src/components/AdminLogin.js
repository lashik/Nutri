// src/components/AdminLogin.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { useHistory, useNavigate } from 'react-router-dom';
import app from '../firebase';
const auth = getAuth(app);
function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      history('/admin');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
