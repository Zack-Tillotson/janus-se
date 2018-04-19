import firebaseSelector from 'firebase/selector';

export default function(state) {
  const {uid} = firebaseSelector(state).authInfo || {};
  const {[uid]: player} = state.game.players;
  return {
    ...state.game,
    player: player || {},
  };
}