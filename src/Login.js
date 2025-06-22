import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    return (
        <div className="box-container">
            <form className="login-form" onSubmit={(e) => {e.preventDefault(); navigate('/landing')} }>
                <h2 className="login-title">Login Page</h2>

                <div className="input-field">
                    <input type="text" id="username" name="username" required
                    value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label for="username">Username</label>
                </div>

                <div className="input-field">
                    <input type="password" id="password" name="password" required
                    value={password} onChange={(e) => setPassword(e.target.value)} />            
                    <label for="password">Password</label>
                </div>

                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default Login;