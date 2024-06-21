import React from 'react';
import './loginPage.css';
import character1 from './assets/ciri.png';
import character2 from './assets/darksouls.png';
import wallpap from './assets/wall2.jpg';
import { Link } from 'react-router-dom';
import api from './BackApi';

const Login2 = () => {
    const characterImages = [character1];
    const animations = ['animateCharacter1'];
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async (e) => {
        try{
            const response = await api.post('auth/login', { username, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
        }
        catch (error){
            console.log("login failed" ,error);
        }
    };

    return (
        <div className='outside-wrapper' style={{ backgroundImage: `url(${wallpap})` }}>
            <div className='loginali' >
                <div className="wowcontainer">
                    <div className="wowform-container">
                        <form id="signup-login-form">
                        <p className='welcomesh'>Welcome Back warrior</p>
                            <input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)}/>
                            <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                            <button type="submit" onClick={handleLogin}>Login</button>
                            <div className="additional-links">
                                <Link to="/forgot-password" className="link">Forgot Password ?</Link>
                                <span className="divider">|</span>
                                <Link to="/signup" className="link">Sign Up</Link>
                            </div>
                        </form>
                    </div>
                    <div className="animation-container">
                        {characterImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                className={`character ${animations[index]}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login2;
