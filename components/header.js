import React from 'react';
import appStyles from '../constants/styles';
import { StyleSheet, Text, View, Image } from 'react-native';

class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/logo.png')} style={styles.logoStyle}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: appStyles.brandColor,
        paddingTop: 30,
        paddingBottom: 10,
        width: '100%',
        alignItems: 'center',
    },

    logoStyle: {
        width: 50,
        height: 50
    },

    text: {
        color: '#fff'
    }
});

module.exports = Header;
