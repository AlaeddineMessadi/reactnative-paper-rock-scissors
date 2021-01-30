// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


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
