import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const button = props => {
  const styleName = props.styleName === "flat" ? styles.flat : styles.round;
  return (
    <TouchableOpacity
      onPress={ props.onPress }
      style={ styleName }
    >
      <Text style={ styles.text }>{ props.text }</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  flat: {
    borderRadius: 40,
    width: 120,
    backgroundColor: "#ff2e4c",
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: "#7a222f",
    paddingLeft: 5,
    paddingRight: 5,
    // borderBottomWidth: 6,
    // boxShadow: "0 6px #7a222f",
    // border: none,
    // cursor: pointer,
    // padding: 5,

    // fontWeight: 700,
  },
  round: {
    borderRadius: 50,
    width: 50,
    height: 50,
    fontSize: 15,
    backgroundColor: "#ff2e4c",
    // boxShadow: "0 6px #7a222f",
    // border: none,
    // cursor: pointer,
    // padding: 0,
    // letterSpacing: 1,
    // fontWeight: 700,
  },
  text: {
    color: "#fff",
    marginTop: 15,
    marginBottom: 15,

    letterSpacing: 1,
  }
});

export default button;
