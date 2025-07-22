import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!email || !password) {
      setMessage('Email and password are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || 'Login failed');
        return;
      }

      setToken(data.token);
      setMessage('✅ Login successful!');
    } catch (error) {
      console.error('Login error:', error);
      setMessage('❌ Could not connect to server.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '1rem', border: '1px solid #ccc' }}>
      <h2>FinMark Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <button type="submit" style={{ width: '100%', padding: '8px' }}>Login</button>
      </form>
      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
      {token && <p style={{ wordBreak: 'break-all', fontSize: '0.8rem' }}>Token: {token}</p>}
    </div>
  );
}

export default App;
