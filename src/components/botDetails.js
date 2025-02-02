import React from 'react';

const BotDetails = ({ bot, onBack, onAdd }) => {
  return (
    <div className="detailsContainer">
      <h1>{bot.name}</h1>
      <p>Code: {bot.codeNumber}</p>
      <div className="botInfoDiv">
        <img src={boltIcon} alt="Power Icon" /> {bot.power}
        <img src={shiledIcon} alt="Shield Icon" /> {bot.defence}
        <img src={lifeIcon} alt="Health Icon" /> {bot.health}
      </div>
      <div className="actionButtons">
        <button onClick={onAdd}>Add to My Army</button>
        <button onClick={onBack}>Back to All Bots</button>
      </div>
    </div>
  );
};

export default BotDetails;
