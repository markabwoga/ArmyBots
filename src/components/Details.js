// BotDetails.js
import React from 'react';

const Details = ({ bot }) => {
  return (
    <div className="selected-bot-info">
      <h3>Selected Bot: {bot.Name}</h3>
      <p>Code Number: {bot.codeNumber}</p>
      <p>Power: {bot.power}</p>
      <p>Health: {bot.health}</p>
      <p>Defence: {bot.defence}</p>
      <img src={bot.image || "default-image.jpg"} alt={bot.Name} className="bot-image" />
    </div>
  );
};

export default Details;
