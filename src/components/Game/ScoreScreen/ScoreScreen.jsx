import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';

import selector from '../state/selector';
import dispatcher from '../state/dispatcher';

import './styles';

function ScoreScreen({players, emotion, doResetGame}) {

  const handleNewGame = () => {
    doResetGame();
  }

  const sortedPlayers = Object.keys(players)
    .sort((a, b) => players[b].score - players[a].score)
    .map(id => ({...players[id], id}));

  return (
    <div className="score-screen">
      <h1>{emotion}</h1>
      <ol className="score-screen__player-scores">
        {sortedPlayers.map(({id, name, imageUrl, score}, index) => {
          return (
            <li key={id} className={classnames('player-scores__player', {'player-scores__player--first': score > 0 && index === 0})}>
              {!!imageUrl && <img src={imageUrl} />}
              {!imageUrl && <img src="/assets/images/spinner.svg" />}
              <div className="player__name">{name}</div>
              {!!score && (<div className="player__score">{parseInt(score*100)}%</div>)}
            </li>
          );
        })}
      </ol>
      <div className="score-screen__controls">
        <button onClick={handleNewGame}>New Game</button>
      </div>
    </div>
  );
}

export default connect(selector, dispatcher)(ScoreScreen);