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
  history: {
    records: []
  }
}

const reducer = (state = initState, action) => {
  let winner = null, score1 = null, score2 = null, weapon1 = null, weapon2 = null, mode = null;
  // console.log(state)
  switch (action.type) {
    case actions.SWITCH_MODE:
      mode = state.mode === initMode ? modeKeys[1] : modeKeys[0];
      return {
        ...initState,
        player1: {
          ...initState.player1,
          label: modes[mode].player1Label
        },
        player2: {
          ...initState.player2,
          label: modes[mode].player2Label
        },
        mode,
        history: {
          records: []
        }
      };

    case actions.PICK_WEAPON:
      let weapon1 = action.weapon || getRandomWeapon();
      let weapon2 = getRandomWeapon();
      let winner = chooseWinner(weapon1, weapon2, state.player1, state.player2);
      let score1 = state.player1.score;
      let score2 = state.player2.score;
      // calculate score
      if (winner !== 'tie') {
        (winner === state.player1.label) ? score1++ : score2++;
      }
      let history = state.history;
      history.records.unshift({ player1: state.player1, player2: state.player2, winner })
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
        history: {
          ...history
        }
      }
    default:
      return state;
  }
  // update the history
}


export default reducer;