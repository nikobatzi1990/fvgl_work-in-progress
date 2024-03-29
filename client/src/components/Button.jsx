import React from 'react';
import '../styles/Button.css';

const Button = (props) => {
  const { className, onClick, text, type } = props;

  return (
    <button
      className = { className }
      type = { type } 
      onClick = { onClick } >
      { text }
    </button>
  )
}

export default Button;