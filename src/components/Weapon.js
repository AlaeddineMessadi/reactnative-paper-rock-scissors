import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

import SvgUri from 'react-native-svg-uri';
import rock from "../assets/weapons/rock.svg";
import paper from "../assets/weapons/paper.svg";
import scissors from "../assets/weapons/scissors.svg";
import question from "../assets/weapons/question.svg";
import loading from "../assets/weapons/loading.svg";


const weapon = props => {
  const choseWeapon = (type) => {
    switch (type) {
      case "rock":
        return rock;
      case "paper":
        return paper;
      case "scissors":
        return scissors;
      default:
        return question;
    }
  };

  return (
    <View style={ styles.weapon }>
      <View style={ styles.image }>
        <SvgUri
          width="150"
          height="150"
          source={ choseWeapon(props.type) }
        />
      </View>
      <Text style={ styles.name }>{ props.type }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weapon: {

  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  name: {
    textAlign: 'center',
  }
});

export default weapon;
