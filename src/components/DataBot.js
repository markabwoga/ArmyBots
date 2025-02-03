
import React, { useEffect, useState } from 'react';
import '../css/Army.css';

const DataBot = () => {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [favorites, setFavorites] = useState([]); 


  useEffect(() => {
    fetch('http://localhost:5000/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCardClick = (bot) => {
    setSelectedBot(bot); 
  };

  const handleGoBack = () => {
    setSelectedBot(null); 
  };

  const handleAddToFavorites = () => {
    setFavorites([...favorites, selectedBot]); 
    setSelectedBot(null);
  };

  return (
    <div className="">

      <div className='Chosen-army'>
               

      {/* Optional: Render favorite bots */}
      {favorites.length > 0 && (
        <div className="favorites">
          {favorites.map((bot, index) => (
            <div key={index} className="bot-card">
              <div className='imagiDiv'>
                <img src={bot.image || "default-image.jpg"} alt={bot.Name} className="bot-image" />
              </div>
              <div className='nameInfo'>
                <h3>{bot.Name}</h3>
                <p>{bot.codeNumber}</p>
              </div>
              <div className='stats'>
                <p>{bot.power} {bot.health} {bot.defence}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>

      <div className='bot-container'>
      {selectedBot ? (
        <div className="bot-card selected">
          <div className='imagiDiv'>
            <img src={selectedBot.image || "default-image.jpg"} alt={selectedBot.Name} className="bot-image" />
          </div>
          <div className='nameInfo'>
            <h3>{selectedBot.Name}</h3>
            <p>{selectedBot.codeNumber}</p>
          </div>

          <div className='stats'>
            <p>{selectedBot.power} {selectedBot.health} {selectedBot.defence}</p>
          </div>

          <div className="bot-buttons">
            <button onClick={handleGoBack}>Go Back</button>
            <button onClick={handleAddToFavorites}>Add to Favorites</button>
          </div>
        </div>
      ) : (
       
        bots.map((bot) => (
          <div 
            key={bot.id} 
            className="bot-card" 
            onClick={() => handleCardClick(bot)} // Add click event to set selected card
          >
            <div className='imagiDiv'>
              <img src={bot.image || "default-image.jpg"} alt={bot.Name} className="bot-image" />
            </div>
            <div className='nameInfo'>
              <h3>{bot.Name}</h3>
              <p>{bot.codeNumber}</p>
            </div>

            <div className='stats'>
              <p>{bot.power} {bot.health} {bot.defence}</p>
            </div>
          </div>
        ))
      )}
      </div>

    </div>
  );
};

export default DataBot;