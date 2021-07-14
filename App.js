import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Clock from './components/Clock.js';
export default function App() {
  return (
    <View style={stylesheet.viewstyling}>
      <Text style={stylesheet.textstyle}>LIVE CLOCK</Text>
      <Clock />
    </View>
  );
}

const stylesheet = StyleSheet.create({
  viewstyling: {
    flex: 1,
    backgroundColor: '#ededed',
    marginTop: 32,
  },

  textstyle: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 32,
    fontSize: 35,
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'Arial',
  },
});
