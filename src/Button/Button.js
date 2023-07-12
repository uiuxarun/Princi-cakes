import React from 'react';
import './Button.css'

const Button = ({ text, className, onClick }) => {
  const handleMouseMove = (e) => {
    const btn = e.currentTarget;
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
  };

  return (
    <div className={`btn ${className}`} onMouseMove={handleMouseMove} onClick={onClick}>
      <span>{text}</span>
    </div>
  );
};

export default Button;
