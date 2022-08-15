import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {

  const suits = ["♠", "♣", "♥", "♦"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  //create an array of Card components with mapping.
  const cards: JSX.Element[] = suits.flatMap(suit => {
    return values.map(value => {
      return <Card suit={suit} value={value} />
    })
  })

  function drawCard(): JSX.Element {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  }

  const[currentCard, setCurrentCard] = useState(drawCard());
  const[prevCard, setPrevCard] = useState(<div className='blank'></div>);
  const[status, setStatus] = useState('Higher or Lower?')
  const[score, setScore] = useState(0);

  function handleClick(event: { target: any; }): void {
    let target= event.target;
    const value: string = currentCard.props.value;
    const index: number = values.findIndex(item => item === value);
    const newCard: JSX.Element = drawCard();
    const newValue: string = newCard.props.value;
    const newIndex: number = values.findIndex(item => item === newValue);

    //if the current card is higher than the new card, its index in the value array will be higher.
    if(index > newIndex) { 
      setStatus('Lower!');
      if (target.textContent === 'Lower') setScore(prev => prev + 1);
    } else if(index < newIndex) {
      setStatus('Higher!');
      if (target.textContent === 'Higher') setScore(prev => prev + 1);
    } else {
      setStatus('The Same!');
      setScore(prev => prev + 1);
    }

    setPrevCard(currentCard);
    setCurrentCard(newCard);

  }

  return (
    <div className="app">
      <div className="board">
        {prevCard}
        {currentCard}
        <button className='lower' onClick={handleClick}>Lower</button>
        <button className="higher" onClick={handleClick}>Higher</button>
        <div className="status">{status} {`Score: ${score}`}</div>
        
      </div>
    </div>
  );
}

export default App;
