import React from 'react'
import './Card.css';

interface CardProps {
  suit: string;
  value: string;
}

export default function Card(props: CardProps){
  return (
    <div className= {`card ${props.suit === "♣" || props.suit === "♠" ? "black" : "red"}`}>
      <div className="top-text">{props.value} {props.suit}</div>
      {props.suit}
      <div className="bottom-text">{props.value} {props.suit}</div>
    </div>
  )
}
