import React from 'react';
import {Alert, Button, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight} from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import TestA from './components/test';
import DynamicImage from './components/dynamicImage';

export default class App extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
            text: ''
        };
    }
  
    render() {
      return (
        <View style={{flex: 1}}>
            <Header></Header>
            
            <ScrollView style={styles.container}>
              <TestA></TestA>
              <DynamicImage></DynamicImage>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>
              <TextInput onChangeText={text => this.setState({text})} style={{height: 40}} placeholder={'please input your name'}></TextInput>
              <Text>{this.state.text}</Text>
              
              <TouchableHighlight style={styles.buttonContainer} onPress={() => {Alert.alert('hello');}}>
                  <Text style={{color: 'white', padding: 20, textAlign: 'center'}}>it's a button</Text>
              </TouchableHighlight>
              
              <View style={styles.buttonContainer}>
                <Button title='press me' onPress={() => Alert.alert('you taped the button')} color='white'></Button>
              </View>
              <View style={styles.rect}>
                <View style={{backgroundColor: 'red', width: 40, height: 40}}></View>
                <View style={{backgroundColor: 'green', width: 40, height: 40}}></View>
                <View style={{backgroundColor: 'yellow', width: 40, height: 40}}></View>
              </View>

              <View style={styles.rect}>
                <View style={{backgroundColor: 'red', width: 40, height: 40}}></View>
                <View style={{backgroundColor: 'green', width: 40, height: 40}}></View>
                <View style={{backgroundColor: 'yellow', width: 40, height: 40}}></View>
              </View>


              <TouchableHighlight style={styles.buttonContainer} onPress={() => {Alert.alert('hello');}}>
                  <Text style={{color: 'white', padding: 20, textAlign: 'center'}}>it's a button</Text>
              </TouchableHighlight>
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
