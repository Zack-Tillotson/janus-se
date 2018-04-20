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
        <h1>Janus</h1>
      </a>
      <div className="header__filler" />
      {!!name && (
        <React.Fragment>
          <div className="controls__name" onClick={handleLogoutClick}>{name}</div>
          <img className="controls__logout" src="/assets/images/logout.svg" onClick={handleLogoutClick} />
        </React.Fragment>
      )}
    </header>
  );
}

export default connect(selector, dispatcher)(Header);