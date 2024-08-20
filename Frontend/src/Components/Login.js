import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ setLoggedIn }) {
    const form = useRef();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Accessing form fields using ref
        const email = form.current.email.value;
        const password = form.current.password.value;

        // Checking credentials
        if (email === "johndoe@gmail.com" && password === "password") {
            console.log("Login successful");
            setLoggedIn(true);
            navigate('/edit');
        } else {
            console.log("Login failed");
        }
    };

    return (
        <div className="login">
            <div className="login-container">
                <div className="login-title">Login to Edit</div>
                <form ref={form} onSubmit={handleLogin}>
                    <div className="login-subheading">Email</div>
                    <input className="login-input" type="email" name="email" required />
                    <div className="login-subheading">Password</div>
                    <input className="login-input" type="password" name="password" required />
                    <button className="login-btn" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
