import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.deleteGoal.bind(this, props.goal.index)}>
      <View style={styles.goal}>
        <Text style={{color: '#000'}}>{props.goal.item}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 10,
    borderRadius: 3,
    backgroundColor: 'grey',
  },
});

export default GoalItem;
