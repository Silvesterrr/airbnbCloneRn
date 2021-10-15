import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import feed from './assets/data/feed';

import Router from './src/navigation/Router';

const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];
export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <Router />
    </>
  );
}
