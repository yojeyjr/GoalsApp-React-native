import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
  const [goalText, setGoalText] = useState('');

  const goalInputHandler = goalText => {
    setGoalText(goalText);
  };

  const addGoal = () => {
    props.saveGoal(goalText);
    setGoalText('');
  };

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.addGoalContainer}>
        <TextInput
          style={styles.taskInputField}
          placeholder="Enter the Goal"
          onChangeText={goalInputHandler}
        />
        <Button
          style={styles.addButton}
          title="Add"
          onPress={() => addGoal()}
        />
        <View>
          <Button
            title="Cancel"
            color="red"
            onPress={props.hideGoalInputOverlay}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addGoalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskInputField: {
    borderColor: 'grey',
    borderWidth: 1,
    width: 200,
    marginRight: 20,
    padding: 13,
  },
});

export default GoalInput;
