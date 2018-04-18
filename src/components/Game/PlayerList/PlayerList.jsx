import React from 'react';
import {connect} from 'react-redux';

import selector from '../state/selector';
import dispatcher from '../state/dispatcher';

import './styles';

function PlayerList({players, doStartGame}) {

  const handleStartGame = () => {
    doStartGame();
  }

  return (
    <div className="player-list">
      <h1>Players</h1>
      <ul>
        {Object.keys(players).map(playerId => {
          const {[playerId]: player} = players;
          return (
            <li key={playerId}>
              {player.name}
            </li>
          );
        })}
      </ul>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}

export default connect(selector, dispatcher)(PlayerList);