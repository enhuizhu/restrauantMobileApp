import React from 'react';
import {Alert, Button, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight} from 'react-native';
//import all the components
import Header from '../components/header';
import Footer from '../components/footer';
import CategoryThumbnail from '../components/categoryThumbnail';
import ApiService from '../services/apiService';

import _ from 'lodash';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        header: null
    };

    constructor(props) {
        super(props);      
    }
  
    render() {
        const { navigate } = this.props.navigation;
        const categories = [];

         _.each(this.props.categories, (v, k) => {
             categories.push(<CategoryThumbnail data={v} key={k} navigation={this.props.navigation}/>);
         });

        return (
          <View style={{flex: 1}}>
              <Header></Header>
              
              <ScrollView style={styles.container}>
                  {categories}
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
    flex: 1,
  }
});

export default HomeScreen;