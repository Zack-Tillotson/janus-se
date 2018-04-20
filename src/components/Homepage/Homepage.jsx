import React from 'react';
import {connect} from 'react-redux';

import dispacher from './state/dispatcher';

import './styles';

const Homepage = function({playerName, doSubmit, doPlayerNameChange}) {

  const handleSubmit = event => {
    event.preventDefault();
    doSubmit();
  }

  const handlePlayerNameChange = event => {
    doPlayerNameChange(event.target.value);
  }

  return (
    <div className="homepage">
    <div className="homepage__logo" />
    <div className="logo__cta">A goofy game</div>
      <div className="logo__details">In Janus, you're given an emotion and compete to take a picture of your face which expresses that emotion. You'll be competing against other players, whoever makes the "best" face wins!</div>
      <form className="homepage__form" onSubmit={handleSubmit}>
        <label htmlFor="player_name" className="form__name">Nickname:</label>
        <input
            id="player_name"
            type="text"
            placeholder="Be witty. No pressure."
            value={playerName}
            onChange={handlePlayerNameChange} />
        <button className="form__submit">Submit</button>
      </form>
    </div>
  );
}

export default connect(null, dispacher)(Homepage);