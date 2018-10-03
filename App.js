import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/store/reducer';
import Game from './src/scenes/Game';

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Game />
      </Provider>
    );
  }
}
