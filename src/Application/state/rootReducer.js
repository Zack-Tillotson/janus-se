import {combineReducers} from 'redux';
import firebase from 'firebase/reducer';
import homepage from 'components/Homepage/state/reducer';
import game from 'components/Game/state/reducer';
import emotions from 'components/Game/state/reducers/emotions';
import photo from 'components/Game/state/reducers/photo';
import player from 'components/Game/state/reducers/player';

export default combineReducers({
  firebase,
  homepage,
  game,
  emotions,
  photo,
  player,
});