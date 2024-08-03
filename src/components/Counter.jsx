import React, { useState } from 'react';
import '../Styles/Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="title">Compteur</div>
      <div className="counter-box">
        <button className="decrement" onClick={() => setCount(count - 1)}>
          -
        </button>
        <span>{count}</span>
        <button className="increment" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
