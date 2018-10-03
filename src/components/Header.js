import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from "./Button";
// import classes from "./Header.css";

// import { modes } from "../../constants/MODES";

const header = props => {
  return (
    <View style={ styles.header }>
      <Text style={ styles.title }>Rock - Paper - Scissors</Text>
      <View style={ styles.mode }>
        <Button
          styleName="flat"
          onPress={ () => props.switchMode() }
          text="Switch"
        />
        <Text style={ styles.subTitle }>{ props.mode }</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: "#1e1548",
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  mode: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    color: "#ffffff",
    marginTop: 1,
    textAlign: "center"
  }
});

export default header;