import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalItem = (props) => {
    const [currentGoal, setCurrentGoal] = useState('');

    const goalInputHandle = (updatedGoal) => {
        // console.log('-----------------Inside TextInput', updatedGoal);
        setCurrentGoal(updatedGoal);
        // console.log("Goal is : ", currentGoal);
    };

    const addGoalHandle = () => {
        props.onAddGoal(currentGoal);
        setCurrentGoal('');
        // onAddGoal.bind(this, currentGoal, setCurrentGoal)
    };

    const { isOpen, onCancel } = props;
    return (
        <Modal visible={isOpen} animationType="slide">
            <View style={styles.inputcontainer}>
                <TextInput
                    placeholder="Course Goal"
                    value={currentGoal}
                    style={styles.input}
                    onChangeText={goalInputHandle}
                />
                {/* <Button title="ADD"
                onPress={() => onAddGoal(currentGoal, setCurrentGoal)}
            /> */}
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" onPress={onCancel} color="red" />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandle} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputcontainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        width: '80%',
        marginBottom: 15
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-around'
    },
    button: {
        width: '40%'
    }
});

export default GoalItem;

// class GoalItem extends React.Component {    
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentGoal: ''
//         };
//     };
//     goalInputHandle = (updatedGoal) => {
//         console.log('-----------------iNside TextInput', updatedGoal);
//         this.setState({
//             currentGoal: updatedGoal
//         });
//         console.log("Goal is : ", this.state);
//     };

//     render() {
//         const { currentGoal } = this.state;
//         console.log("+++++++++", currentGoal);
//         return (
//             <View style={styles.inputcontainer}>
//                 <TextInput
//                     placeholder="Course Goal"
//                     value={currentGoal}
//                     style={styles.input}
//                     onChangeText={(text) => this.goalInputHandle(text)}
//                 />
//                 {/* <Button title="ADD"
//                             onPress={() => onAddGoal(currentGoal, setCurrentGoal)}
//                         /> */}
//                 {/* <Button title="ADD"
//                     onPress={onAddGoal.bind(this, currentGoal, setCurrentGoal)}
//                 /> */}
//             </View>
//         );
//     }
// }