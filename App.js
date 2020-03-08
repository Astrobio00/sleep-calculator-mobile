import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

import Header from './components/Header'
import TimeKeeper from './components/TimeKeeper'
import ResultScreen from './components/ResultScreen'

var time = 0

export default function App() {
  return (
    <View>
      <SafeAreaView style={styles.page}>
        <Header />
        <TimeKeeper />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    width: '100%',
    height:'100%',
    backgroundColor: '#32b44f',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
