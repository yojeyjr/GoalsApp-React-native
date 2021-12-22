import React, {useState} from 'react';
import {View, FlatList, Button} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [goals, setGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const saveGoal = goalText => {
    if (goalText !== undefined && goalText !== '' && goalText !== null) {
      setGoals([...goals, goalText]);
      setIsVisible(false);
    }
  };

  const deleteGoal = id => {
    console.log(id);
    setGoals(goals => {
      return goals.filter((goal, index) => index !== id);
    });
  };

  const hideGoalInputOverlay = () => {
    setIsVisible(false);
  };

  return (
    <View style={{marginTop: 50}}>
      <Button title="open Input" onPress={() => setIsVisible(true)} />
      <GoalInput
        isVisible={isVisible}
        saveGoal={saveGoal}
        hideGoalInputOverlay={hideGoalInputOverlay}
      />
      <FlatList
        data={goals}
        renderItem={goal => <GoalItem goal={goal} deleteGoal={deleteGoal} />}
      />
    </View>
  );
};

export default App;
