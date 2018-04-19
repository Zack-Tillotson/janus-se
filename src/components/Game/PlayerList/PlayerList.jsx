import React from 'react';
import {connect} from 'react-redux';

import selector from '../state/selector';
import dispatcher from '../state/dispatcher';

import './styles';

function PlayerList({players, player, doStartGame, doJoinGame}) {

  const handleStartGame = () => {
    doStartGame();
  }

  const handleJoinGame = () => {
    doJoinGame();
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
      {!!player.name && <button onClick={handleStartGame} className="player-list__button--primary">Start Game</button>}
      {!player.name && <button onClick={handleJoinGame}>Join Game</button>}
    </div>
  );
}

export default connect(selector, dispatcher)(PlayerList);