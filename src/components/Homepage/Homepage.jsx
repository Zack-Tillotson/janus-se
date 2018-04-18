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
      <form className="homepage__form" onSubmit={handleSubmit}>
        <label htmlFor="player_name" className="form__name">Name:</label>
        <input
            id="player_name"
            type="text"
            placeholder="A name is required"
            value={playerName}
            onChange={handlePlayerNameChange} />
        <button className="form__submit">Submit</button>
      </form>
    </div>
  );
}

export default connect(null, dispacher)(Homepage);