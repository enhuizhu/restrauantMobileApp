import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>This is header</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        paddingTop: 20,
        width: '100%',
        alignItems: 'center',
    },

    text: {
        color: '#fff'
    }
});

export default Header;
