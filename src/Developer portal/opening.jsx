import React from 'react';
import './FullComponent.css';
import icon2 from '../assets/portal2.png'
import { Link } from 'react-router-dom';


function FullComponent() {
  return (
    <div className="apphero">
      <header className="headerhero">
        <div className="logohero">Game Pedia: Code;</div>
        <nav className="navhero">
          <a href="/">Home</a>
          <a href="/">Pricing</a>
          <Link to="/introdev">
          <a href="/">Courses</a>
          </Link>
          <a href="/">Tasks</a>
        </nav>
        <button className="signuphero">Sign Up</button>
      </header>
      <section className="herohero">
        <div className="hero-texthero">
          <h1 >Investing in Knowledge and <span>Your Future</span></h1>
          <p> <span>Game Pedia: code;</span > is an Upcoming Game devlopment and communtiy platform that will focus on game development in a gamified way  </p>
          <button className="contacthero">Contact</button>
          <div className="statshero">
          </div>
        </div>
        <div className="neon-border">
        <div className="hero-imagehero">
          <div className="learning-charthero">
            <img src={icon2} alt="Learning Chart" />
          </div>
        </div>
        </div>
      </section>
      <section className="courseshero">
        <h2>Creator Path Services</h2>
        <div className="course-listhero">
          <div className="coursehero1">Tech Events </div>
          <div className="coursehero2">Teaching Game Development</div>
          <div className="coursehero3">Support Promising Projects</div>
          <div className="coursehero4">Task Manager</div>
        </div>
      </section>
    </div>
  );
}

export default FullComponent;
