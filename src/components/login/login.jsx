import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import "./login.css";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('login-page');

        return () => {
            document.body.classList.remove('login-page');
        };
    }, []);

    const handleLogin = () => {
        if (rememberMe) {
            Cookies.set('username', username, { expires: 7 });
        } else {
            localStorage.setItem('username', username);
        }
        navigate('/ListarParceiros');
        window.location.reload(); 
    };

    return (
        <div className="login-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card 
            style={{ width: '300px' }} 
            header={
                <div className="login-header">
                    <img src="src/assets/icon.png" alt="Login Icon" className="login-icon" />
                    <span className="login-title">Login</span>
                </div>
            }
            >

                <div className="p-fluid">
                    <div className="field">
                        <label htmlFor="username">Usuário</label>
                        <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Senha</label>
                        <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Button label="Entrar" onClick={handleLogin} className="btn-entrar p-mt-3" />
                </div>
            </Card>
        </div>
    );

    
}
