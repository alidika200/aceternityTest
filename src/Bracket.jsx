import React, { useState } from 'react';
import './Bracket.css';
import t1 from './assets/avatar3.jpg';
import t2 from './assets/pfp55.jpg';
import t3 from './assets/pfp.webp';
import t4 from './assets/pfp333.jpg';
import t5 from './assets/shitpost.jpg';
import t6 from './assets/unnamed.webp';
import t7 from './assets/witcherlogo.jpg';
import t8 from './assets/debovxe-d9b6da12-ac0b-4e07-b12b-8021c24abfc7.jpg';


const Bracket = () => {
  const teams = [
    { id: 1, image:  {t1} },
    { id: 2, image:  {t2}  },
    { id: 3, image:  {t3}  },
    { id: 4, image:  {t4}  },
    { id: 5, image:  {t5}  },
    { id: 6, image:  {t6}  },
    { id: 7, image:  {t7}  },
    { id: 8, image:  {t8}  },
  ];

  return (
    <div className="tournament-bracket">
      <div className="round round-1">
        {teams.slice(0, 4).map(team => (
          <div className="matchup" key={team.id}>
            <img src={team.image} alt={`Team ${team.id}`} className="team" />
          </div>
        ))}
      </div>
      <div className="round round-2">
        {teams.slice(4, 6).map(team => (
          <div className="matchup" key={team.id}>
            <img src={team.image} alt={`Team ${team.id}`} className="team" />
          </div>
        ))}
      </div>
      <div className="round final">
        {teams.slice(6, 7).map(team => (
          <div className="matchup" key={team.id}>
            <img src={team.image} alt={`Team ${team.id}`} className="team" />
          </div>
        ))}
      </div>
      <div className="champion">
        <img src="champion.png" alt="Champion" className="team" />
      </div>
    </div>
  );
};


export default Bracket;
