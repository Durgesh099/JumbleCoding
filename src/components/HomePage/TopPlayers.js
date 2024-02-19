// TopPlayers.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css'

const TopPlayers = () => {
  const [topPlayers1, setTopPlayers1] = useState([]);
  const [topPlayers2, setTopPlayers2] = useState([]);

  useEffect(() => {
    const fetchTopPlayers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/top-players`); // Adjust the URL based on your server setup
        const responseData = await response.data;
        setTopPlayers1(responseData.top1);
        setTopPlayers2(responseData.top2);
        console.log(responseData)
      } catch (error) {
        console.error('Error fetching top players:', error);
      }
    };

    fetchTopPlayers();
  }, []);

  return (
    <div className='results'>
      <h2>Players with 3 Answers Right</h2>
      <ul>
        {topPlayers1.map((player) => (
          <li key={player._id}>
            <p>Email:</p> {player.email}, <p>Duration:</p> {player.result[0].duration} seconds
          </li>
        ))}
      </ul>
      <h2>Players with 2 Answers Right</h2>
      <ul>
        {topPlayers2.map((player) => (
          <li key={player._id}>
            <p>Email:</p> {player.email}, <p>Duration:</p> {player.result[0].duration} seconds
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopPlayers;
