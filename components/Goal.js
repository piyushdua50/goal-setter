import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, FlatList, Button, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import GoalItem from './GoalItem';
import GoalInput from './GoalInput';
import * as goalActions from '../store/actions/goal';

const Goal = (props) => {

    const [isAddMode, setIsAddMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const getGoals = useCallback(async () => {
        setIsLoading(true);
        await dispatch(goalActions.fetchGoals());
        setIsLoading(false);
    }, [dispatch]);

    useEffect(() => {
        getGoals();
    }, [getGoals]);

    const courseGoals = useSelector(state => state.allGoals.goals);

    const addGoalHandle = async (currentGoal) => {
        setIsLoading(true);
        if (currentGoal.length === 0) {
            return;
        }
        await dispatch(goalActions.addGoal(currentGoal));
        setIsAddMode(false);
        setIsLoading(false);
    };

    const deleteGoalHandle = async (goalId) => {
        // console.log("Goal is going to be deleted with Id: ", goalId);
        setIsLoading(true);
        await dispatch(goalActions.removeGoal(goalId));
        setIsLoading(false);
    };

    const cancelGoalHandle = () => {
        setIsAddMode(false);
    };

    if (isLoading) {
        return (
            <View style={styles.spinner}>
                <ActivityIndicator size='large' color='red' />
            </View>
        );
    };

    // console.log("My Goal list is: ", courseGoals);
    return (
        <View style={styles.screen}>
            <Button title="ADD COURSE GOAL" onPress={() => setIsAddMode(true)} />
            <GoalInput onAddGoal={addGoalHandle} isOpen={isAddMode} onCancel={cancelGoalHandle} />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={(itemData) =>
                    <GoalItem title={itemData.item.goal} onDelete={deleteGoalHandle} id={itemData.item.id} />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Goal;