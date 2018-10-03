import * as actions from './actions';
import { modes, modeKeys } from '../constants/MODES';
import { weapons, weaponKeys } from '../constants/WEAPONS';

import { getRandomWeapon, chooseWinner } from './helpers';

const initMode = modeKeys[0];
const initState = {
  mode: initMode,
  loading: false,
  player1: {
    label: modes[initMode].player1Label,
    weapon: null,
    score: 0
  },
  player2: {
    label: modes[initMode].player2Label,
    weapon: null,
    score: 0
  },
  winner: null,
  tie: false,
  history: {
    mode: this.mode,
    records: []
  }
}

const reducer = (state = initState, action) => {
  let winner = null, score1 = null, score2 = null, weapon1 = null, weapon2 = null;
  switch (action.type) {
    case actions.RESET_GAME:
      return {
        ...state,
        winner: null,
        tie: false,
      }
    case actions.SWITCH_MODE:
      return {
        ...state,
        mode: state.mode === initMode ? modeKeys[1] : modeKeys[0]
      }
    case actions.PICK_WEAPON:
      weapon1 = action.weapon;
      weapon2 = getRandomWeapon();
      winner = chooseWinner(weapon1, weapon2, state.player1, state.player2);
      score1 = state.player1.score;
      score2 = state.player2.score;
      // calculate score
      if (winner !== 'tie') {
        (winner === state.player1.label) ? score1++ : score2++;
      }

      return {
        ...state,
        player1: {
          ...state.player1,
          weapon: weapon1,
          score: score1,
        },
        player2: {
          ...state.player2,
          weapon: weapon2,
          score: score2,
        },
        winner,
      }
    case actions.PICK_RANDOM_WEAPON:
      weapon1 = getRandomWeapon();
      weapon2 = getRandomWeapon();
      winner = chooseWinner(weapon1, weapon2, state.player1, state.player2);
      score1 = state.player1.score, score2 = state.player2.score;
      // calculate score
      if (winner !== 'tie') {
        (winner === state.player1.label) ? score1++ : score2++;
      }

      return {
        ...state,
        player1: {
          weapon: weapon1,
          score: score1,
        },
        player2: {
          weapon: weapon2,
          score: score2
        },
        winner,
      }
    default:
      return state;
  }
  // update the history
}


export default reducer;