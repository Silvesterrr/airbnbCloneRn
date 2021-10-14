import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import HomeScreen from './src/screens/home';
export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView>
      <HomeScreen/>
    </SafeAreaView>
    </>
  );
}
