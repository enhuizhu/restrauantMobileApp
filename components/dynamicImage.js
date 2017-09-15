import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class DynamicImage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            index : 0
        };
        
        this.imageArr = [
            'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/1920px-Grosser_Panda.JPG'
        ];

        this.onImageClick = this.onImageClick.bind(this);
    }
    
    onImageClick(e) {        
        let index = (this.state.index + 1) % this.imageArr.length;

        this.setState({index});
    }
    
    render() {
        let uri = {uri: this.imageArr[this.state.index]};

        let newImg = <Image source={uri} style={styles.imgStyle} borderRadius={70}/> 

        return (
            <View>
                <TouchableOpacity onPress={this.onImageClick}>
                    {newImg}
                </TouchableOpacity>
            </View>
        );   
    }
}

const styles = StyleSheet.create({
      imgStyle: {
        width: 193,
        height: 110,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
});

export default DynamicImage;
