import React, { useEffect, useState } from 'react';

function API() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
      .then(response => response.json())
      .then(data => setDeals(data))
      .catch(error => console.error('Error fetching deals:', error));
      
      
      
//       fetch("https://www.cheapshark.com/api/1.0/games?title=batman")
// .then(response => response.json() )
// .then(data => console.log(data))
// .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Deals</h1>
      <ul>
        {deals.map(deal => (
          <li key={deal.dealID}>{deal.title} - ${deal.salePrice}</li>
        ))}
      </ul>
    </div>
  );
}

export default API;
