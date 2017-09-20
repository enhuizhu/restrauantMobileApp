import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';


class SubScreen extends React.Component {
    static navigationOptions = {
        title: 'Child',
    };

    constructor(props) {
      super(props);
      
    }

    render() {
        console.log('this.props.navigation.state', this.props.navigation.state.params)
        
        return (
            <View>
                 <Text>subScreen</Text>
            </View>
        ); 
    }
}

export default SubScreen;