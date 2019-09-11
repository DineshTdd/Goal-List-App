import React, {useState} from 'react';
import { TextInput, View, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    };

    return (
      <Modal visible={props.visible} animationType="fade">
        <View style={styles.inputContainer}>
      <TextInput 
      placeholder="Course Goal"
      style={styles.input}
      onChangeText={goalInputHandler}
      value={enteredGoal}
      />
      <View style={styles.buttonContainer}>
      <View style ={styles.button}><Button onPress={props.onCancel} title="Cancel"  color="red"/></View>
      <View style={styles.button}><Button
      title="Add"
      onPress ={addGoalHandler}
      /></View>
      </View>
      </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    input: {margin: 10, padding: 10,width: '80%',borderBottomColor: 'black', borderBottomWidth: 1},
    inputContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex:1
    },
    buttonContainer : {  flexDirection: 'row', justifyContent: 'space-around', width: '60%', },
    button: {
      width: '40%'
    }
});

export default GoalInput;