import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import Player from "../components/Player";
// import History from "../components/History/History";

import Aux from '../hoc/Aux';

// import classes from "./Game.css";

export default class Game extends Component {

  render() {
    return (
      <Aux>
        <Header />
        <Text style={ styles.tie }>Tie!</Text>
        <View style={ styles.container }>
          <Player
            label="Human"
            weapon="paper"
            score="10"
            loading="true"
          />
          <Player
            label="Human"
            weapon="rock"
            score="10"
            loading="false"
          />
        </View>
      </Aux>
    );
  }
}

const styles = StyleSheet.create({
  tie: {
    backgroundColor: "#ff2e4c",
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    backgroundColor: '#fcd77f',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

