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
    // const tie = this.props.winner === 'tie' ? <Text style={ styles.tie }>Tie!</Text> : null;
    const tie = <Text style={ styles.tie }>Tie!</Text>;
    return (
      <Aux>
        <Header mode={ modes[this.props.mode].label.toUpperCase() }
          switchMode={ this.props.switchMode } />

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
            { tie }
          </View>
          <History
            player1={ { label: this.props.p1.label } }
            player2={ { label: this.props.p2.label } }
            history={ this.props.history }
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
    // width: 300,
    position: 'absolute',
    left: (Dimensions.get('window').width / 2) - 100,
    padding: 100,
    // top: "50%",
    // left: 20,
    // justifyContent: 'center',
    // alignSelf: 'center',
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