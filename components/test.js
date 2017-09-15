import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TestA extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>test</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        alignItems: 'center'
    },

    text: {
        color: '#000'
    }
});

export default TestA;
