import { useState, useEffect } from "react";
import "./App.css";
import SingleCard from "./Components/SingleCard";

function App() {
  const [card, setCard] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const cards = [
    { src: "/img/helmet-1.png", matched: false },
    { src: "/img/potion-1.png", matched: false },
    { src: "/img/ring-1.png", matched: false },
    { src: "/img/scroll-1.png", matched: false },
    { src: "/img/shield-1.png", matched: false },
    { src: "/img/sword-1.png", matched: false },
  ];

  const shufleCard = () => {
    const shufledCard = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCard(shufledCard);
    setTurn(0);
  };

  const handleClick = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCard((prevCards) => {
          return prevCards.map((prevCard) => {
            if (prevCard.src === choiceTwo.src) {
              return { ...prevCard, matched: true };
            } else {
              return prevCard;
            }
          });
        });
        resetchoice();
      } else {
        setTimeout(() => resetchoice(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetchoice = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurn((prevTurn) => prevTurn + 1);
  };
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shufleCard}>New Game</button>
      <div className="card-grid">
        {card.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleClick={handleClick}
            flipped={card === choiceTwo || card === choiceOne || card.matched}
          />
        ))}
      </div>
      <h3>Turn : {turn}</h3>
    </div>
  );
}

export default App;
