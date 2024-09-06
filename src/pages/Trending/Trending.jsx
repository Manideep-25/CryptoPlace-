import React, { useEffect, useState } from 'react';
import './Trending.css';

const Trending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-bMXuPWoDJ8GBDr5m6SxsQ5nE' }
      };

      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending', options);
        const data = await response.json();
        setTrending(data.coins);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTrendingCoins();
  }, [trending]);

  return (
    <>
    <div className="trending-container">
      <div className="trending-wrapper">
        {trending.map((coin) => (
          <div className="coin-card" key={coin.item.id}>
            <img src={coin.item.large} alt={coin.item.name} className="coin-image" />
            <div className="coin-info">
              <strong className="coin-name">{coin.item.name}</strong>
              <div className="coin-details">Market Cap Rank: {coin.item.market_cap_rank}</div>
              <div className="coin-score">Score: {coin.item.score}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Trending;
