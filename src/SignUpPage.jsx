import React from 'react';
import './signUpPage.css';
import character1 from './assets/geraltdef.png';
import character2 from './assets/darksouls.png';
import wallpap from './assets/nomansky.jpg';

const SignUp = () => {
    const characterImages = [character1, character2];
    const animations = ['animateCharacter1', 'animateCharacter2'];

    return (
        <div className='outside-wrapper'>
            <div className='loginali' style={{ backgroundImage: `url(${wallpap})` }}>
                <div className="wowcontainer">
                    <div className="wowform-container">
                        <form id="signup-login-form">
                            <input type="text" placeholder="Username" required />
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit"> Login</button>
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

export default SignUp;
