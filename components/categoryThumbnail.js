'use strict';

import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import UrlHelper from '../helpers/urlHelper';

class CategoryThumbnail extends React.Component {
    _onPress() {
        this.props.navigation.navigate('SubScreen', this.props.data);        
    }
    
    render() {
        return (
            <TouchableHighlight onPress={this._onPress.bind(this)}>
                <View style={styles.containerStyle}>
                    <Image style={styles.imgStyle} source={{uri: UrlHelper.getImage(this.props.data.pic)}} resizeMode={'stretch'}/>
                    <Text style={styles.textStyle}>{this.props.data.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    textStyle: {
        backgroundColor: 'rgba(90, 90, 90, 0.5)',
        width: '90%',
        marginTop: -35,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        color: 'white'
    },
    
    imgStyle: {
        width: '90%',
        height: 150
    }
});

module.exports = CategoryThumbnail;