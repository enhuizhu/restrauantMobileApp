import React from 'react';
import {Alert, Button, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight} from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import TestA from './components/test';
import DynamicImage from './components/dynamicImage';

import {
  StackNavigator,
} from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    constructor(props) {
        super(props);
      
        this.state = {
            text: ''
        };
    }
  
    render() {
      const { navigate } = this.props.navigation;
      
      return (
        <View style={{flex: 1}}>
            <Header></Header>
            
            <ScrollView style={styles.container}>
              <Text>hello</Text>
              <Button title='go to sub screen' onPress={() => navigate('subScreen')}/>
            </ScrollView>
            
            <Footer></Footer>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
    // paddingBottom: 500,
    flex: 1,
  },

  imgStyle: {
    width: 193,
    height: 110,
    marginTop: 10,
    marginBottom: 10
  },

  rect: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  buttonContainer: {
    backgroundColor: 'blue',
    borderRadius: 50,
    margin: 20,
    overflow: 'hidden'
  }
});

class subScreen extends React.Component {
    constructor(props) {
      super(props);
      
    }

    render() {
        return (
            <View>
                  <Text>subScreen</Text>
            </View>
        ); 
    }
}


App = StackNavigator({
  Home: { screen: HomeScreen },
  subScreen: {screen: subScreen}
});

export default App;
