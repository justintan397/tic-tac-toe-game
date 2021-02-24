import React from 'react';
import './App.css';
import Game from './components/Game';

<body>
</body>

function Play() {
  
  return ( 
    <div className='play'>
      <h1>Tic Tac Toe Game</h1>
      <div className='player'>
        <span>X</span>
      </div>
      <div className='player'>
          <span>0</span>
        </div>
      <Game />
    </div>
  )
}

export default Play;
