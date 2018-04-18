import React from 'react';
import {connect} from 'react-redux';

import selector from '../state/selector';
import dispatcher from '../state/dispatcher';

import './styles';

function ScoreScreen({players, doStartGame}) {

  const handleStartGame = () => {
    doStartGame();
  }

  return (
    <div className="player-list">
      <h1>ScoreScreen</h1>
    </div>
  );
}

export default connect(selector, dispatcher)(ScoreScreen);