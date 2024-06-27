import React from 'react';
import './roadmaps.css';
import { Link } from 'react-router-dom';
import {
    AppstoreOutlined,
    PieChartOutlined,
    HomeOutlined,
    ShoppingOutlined,
    StarOutlined,
    TeamOutlined,
    ShoppingCartOutlined 
  } from '@ant-design/icons';
import { color } from 'framer-motion';

const Roadmap = () => {
    return (
        <div className="Devwrapper">
            <div className="devContain">
                <input type="radio" name="devSlide" id="c1" defaultChecked />
                <label htmlFor="c1" className="devCard">
                    <div className="devrow">
                        <Link to="/introdev">
                        <div className="delete"><ShoppingCartOutlined /></div>
                        </Link>
                        <a  className="devicon"><i className='bx bxs-detail'></i></a>
                        <div className="devdesc">
                            <h4>Game Design</h4>
                            <p>Intro to Game Development</p>
                        </div>
                    </div>
                </label>
                <input type="radio" name="devSlide" id="c2" />
                <label htmlFor="c2" className="devCard">
                    <div className="devrow">
                        <div className="delete"><ShoppingCartOutlined /></div>
                        <a  className="devicon"><i className='bx bxs-detail'></i></a>
                        <div className="devdesc">
                            <h4>Level Building</h4>
                            <p>Build Game levels and maps using Unity!</p>
                        </div>
                    </div>
                </label>
                <input type="radio" name="devSlide" id="c3" />
                <label htmlFor="c3" className="devCard">
                    <div className="devrow">
                        <div className="delete"><ShoppingCartOutlined /></div>
                        <a  className="devicon"><i className='bx bxs-detail'></i></a>
                        <div className="devdesc">
                            <h4>Coding</h4>
                            <p>Game Programming Using C#</p>
                        </div>
                    </div>
                </label>
                <input type="radio" name="devSlide" id="c4" />
                <label htmlFor="c4" className="devCard">
                    <div className="devrow">
                        <div className="delete"><ShoppingCartOutlined /></div>
                        <a className="devicon"><i className='bx bxs-detail'></i></a>
                        <div className="devdesc">
                            <h4>Character Design</h4>
                            <p>Let's start building our favorite characters</p>
                        </div>
                    </div>
                </label>
            </div>
         
        </div>
    );
}

export default Roadmap;
