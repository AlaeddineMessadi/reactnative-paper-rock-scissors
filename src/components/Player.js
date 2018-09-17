import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import Weapon from "./Weapon";

const player = ({ id, label, loading, weapon, score, order }) => {
  // const displayOrder = classes.order1;

  return (
    <View style={ styles.container }>
      <Text style={ styles.label }>{ label }</Text>
      <Text style={ styles.score }>{ score }k</Text>
      <View>
        <Weapon
          type={ weapon }
          loading={ loading }
        />
      </View>
    </View>
  );
};

export default player;

const styles = StyleSheet.create({
  container: {
    // minWidth: 50,
    // maxHeight: 400,
    height: 300,
    flex: 1,
    // marginBottom: 10,
    // flexGrow: 1
  },
  //.player .label
  label: {
    textAlign: "center",
    marginTop: 3,
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 5
  },
  //.player .score
  score: {
    backgroundColor: "#ff2e4c",
    borderRadius: 5,
    color: "#ffffff",
    minWidth: 60,
    padding: 10,
    margin: 10,
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center"
  }
});