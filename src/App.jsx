import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      
      setMessage(data.message);
    } catch {
      setMessage('Không kết nối được với Backend rồi!');
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>🚀 FASTTRAVEL - LOGIN TEST</h2>
      <form onSubmit={handleLogin} style={{ display: 'inline-block', textAlign: 'left', background: '#f3f3f3', padding: '20px', borderRadius: '8px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Tài khoản: </label><br />
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required style={{ width: '200px', padding: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Mật khẩu: </label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '200px', padding: '5px' }} />
        </div>
        <button type="submit" style={{ padding: '5px 15px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Đăng nhập</button>
      </form>
      
      {message && <h3 style={{ marginTop: '20px', color: message.includes('thành công') ? 'green' : 'red' }}>{message}</h3>}
    </div>
  );
}

export default App;