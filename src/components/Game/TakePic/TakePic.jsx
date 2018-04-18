import React from 'react';
import {connect} from 'react-redux';

import selector from '../state/selector';
import dispatcher from '../state/dispatcher';

import './styles';

function TakePic({players, doStartGame}) {

  const handleStartGame = () => {
    doStartGame();
  }

  return (
    <div className="player-list">
      <h1>TakePic</h1>

      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}

export default connect(selector, dispatcher)(TakePic);