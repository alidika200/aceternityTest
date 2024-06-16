import React, { useState } from 'react';
import './Bracket.css';

const Bracket = () => {
  const initialMatches = [
    ['Player 1', 'Player 2'],
    ['Player 3', 'Player 4'],
    ['Player 5', 'Player 6'],
    ['Player 7', 'Player 8'],
  ];

  const [matches, setMatches] = useState([initialMatches]);
  const [winners, setWinners] = useState([]);

  const handlePlayerClick = (roundIndex, matchIndex, player) => {
    const newMatches = [...matches];
    const newWinners = [...winners];

    if (!newMatches[roundIndex + 1]) {
      newMatches[roundIndex + 1] = [];
    }

    newMatches[roundIndex + 1].push([player]);

    if (!newWinners[roundIndex]) {
      newWinners[roundIndex] = {};
    }

    newWinners[roundIndex][matchIndex] = player;

    setMatches(newMatches);
    setWinners(newWinners);
  };

  const renderMatches = (round, roundIndex) => {
    return round.map((match, matchIndex) => (
      <div className="match" key={matchIndex}>
        {match.map((player, playerIndex) => (
          <div
            className={`player ${winners[roundIndex] && winners[roundIndex][matchIndex] === player ? 'winner' : ''}`}
            key={playerIndex}
            onClick={() => handlePlayerClick(roundIndex, matchIndex, player)}
          >
            {player}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="bracket">
      {matches.map((round, roundIndex) => (
        <div className="round" key={roundIndex}>
          {renderMatches(round, roundIndex)}
        </div>
      ))}
    </div>
  );
};

export default Bracket;
