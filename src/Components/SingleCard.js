import React from "react";
import "./SingleCard.css";
const SingleCard = ({ card, handleClick, flipped }) => {
  return (
    <div className="card">
      <div className={flipped ? "flip" : ""}>
        <img src={card.src} alt="Front Card" className="front " />
        <img
          className="back"
          src="/img/cover.png"
          alt="Cover Card"
          onClick={() => handleClick(card)}
        />
      </div>
    </div>
  );
};

export default SingleCard;
