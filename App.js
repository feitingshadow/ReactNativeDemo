/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { View } from 'react-native';
import TigerList from './src/components/TigerList';

import Heading from './src/components/Heading.js'

const App = () => {
  return ( 
  <View>
      <Heading headingTitle={'List Items'}/>
      <TigerList />
  </View>
  );
};

const styles = {
}

export default App;
