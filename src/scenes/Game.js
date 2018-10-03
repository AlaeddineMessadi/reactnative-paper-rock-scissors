import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Player from "../components/Player";
import Controls from '../components/Controls';
import History from "../components/History";

import Aux from '../hoc/Aux';

import * as actions from '../store/actions';

// import classes from "./Game.css";

class Game extends Component {
  render() {
    const tie = this.props.winner === 'tie' ? <Text style={ styles.tie }>Tie!</Text> : null;

    return (
      <Aux>
        <Header mode={ this.props.mode }
          switchMode={ this.props.switchMode } />
        { tie }
        <ScrollView contentContainerStyle={ styles.container }>
          <View style={ styles.gameContainer }>
            <Player
              label={ this.props.p1.label }
              weapon={ this.props.p1.weapon }
              score={ this.props.p1.score }
              loading={ this.props.loading }
            />
            <Player
              label={ this.props.p2.label }
              weapon={ this.props.p2.weapon }
              score={ this.props.p2.score }
              loading={ this.props.loading }
            />
          </View>
          <History
            player1={ { label: "Human" } }
            player2={ { label: "Robot" } }
            player1={ { label: "Human" } }
            history={ { records: [{ player1: { weapon: "Rock" }, player2: { weapon: "Paper" }, winner: "Human" }, { player1: { weapon: "Rock" }, player2: { weapon: "Paper" }, winner: "Robot" }, { player1: { weapon: "Rock" }, player2: { weapon: "Paper" }, winner: "Human" }] } }
          />
        </ScrollView>
        <Controls
          mode={ this.props.mode }
          pickWeapon={ this.props.pickWeapon }
        />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    p1: state.player1,
    p2: state.player2,
    mode: state.mode,
    winner: state.winner,
    tie: state.tie
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetGame: () => dispatch({ type: actions.RESET_GAME }),
    switchMode: () => dispatch({ type: actions.SWITCH_MODE }),
    pickWeapon: () => dispatch({ type: actions.PICK_RANDOM_WEAPON })
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
    flexDirection: 'column',
    backgroundColor: '#fcd77f',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  gameContainer: {
    display: "flex",
    flexDirection: 'row',
    paddingBottom: 20
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Game);