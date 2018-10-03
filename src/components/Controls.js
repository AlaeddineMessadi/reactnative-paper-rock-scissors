import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Button from "./Button";

import { weaponKeys } from "../constants/WEAPONS";
import * as actions from '../store/actions';

const controls = props => {
  onPress = () => {
    const weapon1 = null;
    const weapon2 = null;
  };

  return (
    <View style={ styles.container }>
      { props.mode === "vs" ? weaponKeys.map((weapon, index) => (
        <View key={ index } style={ styles.element }>
          <Button
            styleName="flat"
            onPress={ () => props.pickWeapon(weapon) }
            text={ weapon }
          />
        </View>
      ))
        : (
          <View style={ styles.element }>
            <Button
              styleName="flat"
              onPress={ () => props.pickRandomWeapon() }
              text="Play"
            />
          </View>
        ) }
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    pickWeapon: (weapon) => dispatch({ type: actions.PICK_WEAPON, weapon }),
    pickRandomWeapon: () => dispatch({ type: actions.PICK_RANDOM_WEAPON })
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2e99b0",
    height: 100,
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center"
  },
  element: {
    alignSelf: 'center',
    margin: 5
  }
})

export default connect(null, mapDispatchToProps)(controls);
