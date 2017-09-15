'use strict';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <View style={styles.footer}>
                <Text style={{color: 'white', textAlign: 'center'}}>This is footer</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'green',
        padding: 20
    }
});

export default Footer;