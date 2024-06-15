import React, { useEffect, useState } from 'react';

function API({ gameName }) {
  const [gameDetails, setGameDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameByTitle = async (title) => {
      try {
        const response = await fetch(`https://www.cheapshark.com/api/1.0/games?title=${encodeURIComponent(title)}`);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const games = await response.json();
        if (games.length === 0) {
          throw new Error('Game not found');
        }
        return games[0].gameID; // Assuming the first result is the desired game
      } catch (error) {
        throw error;
      }
    };

    const fetchGameDetailsById = async (id) => {
      try {
        const response = await fetch(`https://www.cheapshark.com/api/1.0/games?id=${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const gameDetails = await response.json();
        return gameDetails;
      } catch (error) {
        throw error;
      }
    };

    const getGameDetails = async () => {
      try {
        const gameId = await fetchGameByTitle(gameName);
        const details = await fetchGameDetailsById(gameId);
        const filteredDeals = details.deals.filter(deal => [1, 7, 11].includes(parseInt(deal.storeID)));
        setGameDetails({ ...details, deals: filteredDeals });
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getGameDetails();
  }, [gameName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!gameDetails) {
    return <div>No details available</div>;
  }

  return (
    <div>
      <ul>
        {gameDetails.deals.map(deal => (
          <li key={deal.dealID}>
            {deal.storeID === '1' && <span>Steam: ${deal.price}</span>}
            {deal.storeID === '7' && <span>GOG: ${deal.price}</span>}
            {deal.storeID === '11' && <span>Humble Bundle: ${deal.price}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default API;
