import React, {Component} from 'react'
import {View, Text} from 'react-native'

class Heading extends Component {

    render() {
        const {textStyle} = styles;
        return (
        <View style={styles.viewStyle}>
            <Text style={textStyle}>{this.props.headingTitle}</Text>
        </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 3
    },
    textStyle: {
        fontSize: 20
    }
};
export default Heading;