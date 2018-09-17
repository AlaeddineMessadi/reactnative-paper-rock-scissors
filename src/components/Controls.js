import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Button from "./Button";

import { weaponKeys } from "../constants/WEAPONS";


const controls = props => {
  const mode = "vs";
  onPress = () => alert('pressed control');

  return (
    <View style={ styles.container }>
      { mode === "vs" ? weaponKeys.map((weapon, index) => (
        <View key={ index } style={ styles.element }>
          <Button
            styleName="flat"
            onPress={ onPress }
            text={ weapon }
          />
        </View>
      ))
        : (
          <View style={ styles.element }>
            <Button
              styleName="flat"
              onPress={ onPress }
              text="Play"
            />
          </View>
        ) }
    </View>
  );
};

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

export default controls;
