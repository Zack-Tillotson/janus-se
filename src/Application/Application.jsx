import React from 'react';
import {connect} from 'react-redux';

import Page from 'components/Page';
import Homepage from 'components/Homepage';
import PlayerList from 'components/Game/PlayerList';
import TakePic from 'components/Game/TakePic';
import ScoreScreen from 'components/Game/ScoreScreen';

import firebaseSelector from 'firebase/selector';
import firebaseDispatcher from 'firebase/dispatcher';
import gameSelector from 'components/Game/state/selector';
import homepageSelector from 'components/Homepage/state/selector';

class Application extends React.Component {

  componentDidMount() {
    this.props.monitorConnection();
  }

  getGameState = () => {
    if(!this.props.firebase.isLoggedIn || !this.props.game.player.name) {
      return 'unauthenticated';
    } else if(this.props.game.player.score) {
      return 'postgame';
    } else {
      return this.props.game.state;
    }
  }

  renderContent = () => {
    switch(this.getGameState()) {
      case 'unauthenticated': {
        return (
          <Homepage />
        );
      }
      case 'pregame': {
        return (
          <PlayerList />
        );
      }
      case 'takingPics': {
        return (
          <TakePic />
        );
      }
      case 'postgame': {
        return (
          <ScoreScreen />
        );
      }
    }
  }

  render() {
    return (
      <Page>
        {this.renderContent()}
      </Page>
    );
  }
}

function metaSelector(state) {
  return {
    firebase: firebaseSelector(state),
    homepage: homepageSelector(state),
    game: gameSelector(state),
  }
}

export default connect(metaSelector, firebaseDispatcher)(Application);