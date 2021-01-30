/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Player from "../components/Player";
import Controls from '../components/Controls';
import History from "../components/History";

import Aux from '../hoc/Aux';

import { modes } from '../constants/MODES'
import * as actions from '../store/actions';

// import classes from "./Game.css";

class Game extends Component {
  render() {
    const { mode, switchMode, winner, p1, p2, history , loading} = this.props;
    return (
      <Aux>
        <Header mode={ modes[mode].label.toUpperCase() }
          switchMode={ switchMode } />
        <ScrollView contentContainerStyle={ styles.container }>
        { winner === 'tie' ? <Text style={ styles.tie }>Tie!</Text> : null }
          <View style={ styles.gameContainer }>
            <Player
              label={ p1.label }
              weapon={ p1.weapon }
              score={ p1.score }
              loading={ loading }
            />
            <Player
              label={ p2.label }
              weapon={ p2.weapon }
              score={ p2.score }
              loading={ loading }
            />
            
          </View>
          <History
            player1={ { label: p1.label } }
            player2={ { label: p2.label } }
            history={ history }
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
    history: state.history,
    tie: state.tie
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchMode: () => dispatch({ type: actions.SWITCH_MODE }),
    pickWeapon: (weapon) => dispatch({ type: actions.PICK_WEAPON, weapon })
  }
}

const styles = StyleSheet.create({
  tie: {
    backgroundColor: "#ff2e4c",
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "bold",
    top: 0,
    width: "100%",
    padding: 5,
  },
  container: {
    display: "flex",
    position: "relative",
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