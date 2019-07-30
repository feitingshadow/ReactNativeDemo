import React, {Component} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class TigerList extends Component {

    state = { albums: [] };

    constructor() {
        super();
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            this.setState(
                { albums: response.data }
            );
        });
    }
    componentDidMount() {
        console.log('component will mount');
    }
    
    renderTigers() {
       return this.state.albums.map( item => <Text>{item.title}</Text>);
    }

    render() {
        console.log(this.state);
        return (
         <View>
             {this.renderTigers()}
        </View>
          );
        }
};

export default TigerList;