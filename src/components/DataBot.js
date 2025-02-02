import React, { useEffect, useState } from 'react';


const DataBot = () => {
  const [bots, setBots] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    fetch('http://localhost:5000/bots')  // Adjust the path based on where your JSON file is located
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="bot-container">
      {bots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <img src={bot.image || "default-image.jpg"} alt={bot.Name} className="bot-image" />
          <h3>{bot.Name}</h3>
          <p><strong>Code Number:</strong> {bot.codeNumber}</p>
          <p><strong>Power:</strong> {bot.power}</p>
          <p><strong>Health:</strong> {bot.health}</p>
          <p><strong>Defence:</strong> {bot.defence}</p>
        </div>
      ))}
    </div>
  );
};

export default DataBot;

