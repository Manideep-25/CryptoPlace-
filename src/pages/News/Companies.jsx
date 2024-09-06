import React, { useEffect, useState } from 'react';
import './Companies.css';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-bMXuPWoDJ8GBDr5m6SxsQ5nE'
      }
    };

    fetch('https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin', options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setCompanies(data.companies);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="companies-container">
      <h2>Companies Holding Cryptocurrency</h2>
      <div className="companies-list">
        {companies.map(company => (
          <div key={company.symbol} className="company-card">
            <h3 className='company-name'>{company.name}</h3>
            <br/>
            <p>Country: {company.country}</p>
            <p>Total Holdings: <span className='percentage'>{company.total_holdings}</span></p>
            <p>Total Entry Value (USD): <span className='percentage'>${company.total_entry_value_usd.toLocaleString()}</span></p>
            <p>Total Current Value (USD): <span className='percentage'>${company.total_current_value_usd.toLocaleString()}</span></p>
            <p>Percentage of Total Supply: <span className='green-text'>{company.percentage_of_total_supply}%</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
