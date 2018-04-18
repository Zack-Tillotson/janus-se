import React, {Fragment} from 'react';

import './styles';

import Header from '../Header';
import Body from '../Body';

class Page extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Body>
          {this.props.children}
        </Body>
      </Fragment>
    );
  }
}

export default Page;