import React from 'react';
import {connect} from 'react-redux';
import styles from './styles';

import selector from 'components/Game/state/playerSelector';
import dispatcher from 'components/Game/state/dispatcher';

function Header({name, doLogout}) {

  const handleLogoutClick = () => {
    doLogout();
  }
  return (
    <header>
      <a href="/">
        <h1>{name || 'Janus'}</h1>
      </a>
      <div className="header__filler" />
      {!!name && (
        <div className="controls__logout" onClick={handleLogoutClick}>Log Out</div>
      )}
    </header>
  );
}

export default connect(selector, dispatcher)(Header);