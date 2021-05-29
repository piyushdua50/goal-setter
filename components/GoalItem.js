import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
    const { title, onDelete, id } = props;
    return (
        <TouchableOpacity onPress={onDelete.bind(this, id)} activeOpacity={0.8}>
            <View style={styles.listItems}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        marginVertical: 15,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default GoalItem;
