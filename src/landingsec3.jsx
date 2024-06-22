import React from 'react';
import './slider3.css';
import unity2 from './images/unity2.png';
import unreal2 from './images/unreal2.png';
import nvidiaLogo from './images/235_Nvidia_logo-512.jpg';
import epic from './images/epic.png';
import steam from './images/steam.png';
import monster from './images/monster.png';
import intel from './images/intel.png';
import cdpr from './images/cdpr.png';
import ea2 from './images/ea2.png';
import divisionLogo from './images/divisionlogo.png';
import gtav from './images/gtav.png';
import ghosts from './images/ghosts.png';
import csgo2 from './images/csgo2.png';
import ss1 from './images/ss1.png';
import division4 from './images/division4.png';
import witcher3 from './images/witcher3.png';
import alien from './images/alien.png';
import gta from './images/gta.png';

const Slider3 = () => {
    return (
        <div className={styles.s3wrapper}>
            <main className={styles.s3main}>
                <h1 className={styles.sec3slideTitle}>A Rich Library of Games, Courses and More</h1>
                <div className={`${styles.sec3slide} ${styles.s3slider}`} reverse="false" style={{ '--width': '200px', '--height': '200px', '--quantity': '9', marginBottom: '20px' }}>
                    <div className={styles.s3list}>
                        <div className={styles.sec3slideItem} style={{ '--position': 1 }}><img src={unity2} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 2 }}><img src={unreal2} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 3 }}><img src={nvidiaLogo} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 4 }}><img src={epic} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 5 }}><img src={steam} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 6 }}><img src={monster} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 7 }}><img src={intel} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 8 }}><img src={cdpr} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 9 }}><img src={ea2} alt="" /></div>
                    </div>
                </div>

                <div className={`${styles.sec3slide} ${styles.s3slider}`} reverse="true" style={{ '--width': '200px', '--height': '200px', '--quantity': '9' }}>
                    <div className={styles.s3list}>
                        <div className={styles.sec3slideItem} style={{ '--position': 1, marginTop: '70px' }}><img src={divisionLogo} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 2, marginTop: '30px' }}><img src={gtav} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 3 }}><img src={ghosts} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 4 }}><img src={csgo2} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 5 }}><img src={ss1} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 6 }}><img src={division4} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 7 }}><img src={witcher3} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 8 }}><img src={alien} alt="" /></div>
                        <div className={styles.sec3slideItem} style={{ '--position': 9 }}><img src={gta} alt="" /></div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Slider3;
