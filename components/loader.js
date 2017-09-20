'use strict';

import React from 'react';
import {StyleSheet, View, ActivityIndicator, Dimensions} from 'react-native';

class Loader extends React.Component {
    render() {
        <View style={styles.overlay}>
            <ActivityIndicator
                animating={true}
                size="large"
            />
        </View>
    }
}

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        width: '100%',
        height: screenHeight,
        flex: 1,
        left: 0,
        top: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

module.exports = Loader;