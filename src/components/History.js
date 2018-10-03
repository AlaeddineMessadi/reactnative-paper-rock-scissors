import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const history = (props) => {
  const label1 = props.player1.label;
  const label2 = props.player2.label;
  const records = props.history.records;



  return (
    <View style={ styles.history }>
      <View style={ styles.row }>
        <Text style={ [styles.label, styles.bold] }>{ label1 }</Text>
        <View style={ styles.border }></View>
        <Text style={ [styles.label, styles.bold] }>{ label2 }</Text>
      </View>
      <View style={ styles.body }>
        {
          records.map((record, index) => {
            let tie, p1Status, p2Status;
            switch (record.winner) {
              case label1:
                p1Status = styles.win;
                p2Status = styles.lose;
                break;
              case label2:
                p2Status = styles.win;
                p1Status = styles.lose;
                break;
              default:
                tie = styles.tie;
                break;
            }

            return (
              <View style={ [styles.row, tie] } key={ index }>
                <Text style={ [styles.label, p1Status] }>{ record.player1.weapon }</Text>
                <View style={ styles.border }></View>
                <Text style={ [styles.label, p2Status] }>{ record.player2.weapon }</Text>
              </View>
            )
          })
        }

      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  history: {
    display: "flex",
    flexDirection: 'column',
  },
  row: {
    display: "flex",
    flexDirection: 'row',
    backgroundColor: '#95A5A6',
    justifyContent: 'center',
    height: 30,
    borderBottomWidth: 5,
    borderBottomColor: '#ffffff'
  },
  border: {
    width: 2,
    backgroundColor: '#ffffff'
  },
  label: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    padding: 5,
    color: '#ffffff',
    fontSize: 15,
  },
  bold: {
    fontWeight: 'bold'
  },
  win: {
    backgroundColor: '#2e99b0'
  },
  lose: {
    backgroundColor: '#ff2e4c'
  },
  tie: {
    backgroundColor: '#1e1548'
  }
});

export default history;