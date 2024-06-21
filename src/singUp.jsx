import React from 'react';
import './signUp.css';
import character1 from './assets/geraltdef.png';
import character2 from './assets/darksouls.png';
import wallpap from './assets/wallpaperspace.jpg';
import { Link } from 'react-router-dom';

const SignUp2 = () => {
    const characterImages = [character1];
    const animations = ['animateCharacter1'];

    return (
        <div className='outside-wrapper2' style={{ backgroundImage: `url(${wallpap})` }}>
            <div className='loginali2' >
                <div className="wowcontainer2">
                    <div className="wowform-container2">
                        <form id="signup-login-form2">
                        <p className='welcomesh2'>Welcome Agent</p>
                            <input type="text" placeholder="Username" required />
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <input type="password" placeholder="Repeat Password" required />
                            <button type="submit">Sign Up</button>
                            <div className="additional-links2">
                                <Link to="/login" className="link">Already Have an Account?</Link>
                               
                            </div>
                        </form>
                    </div>
                    <div className="animation-container2">
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

export default SignUp2;
