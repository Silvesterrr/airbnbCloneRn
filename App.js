import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import HomeScreen from './src/screens/home';
import Post from './src/components/Post';
import SearchResultsScreen from './src/screens/SearchResults';


import feed from './assets/data/feed';

const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];
export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView>
      {/* <Post post={post1} />
      <Post post={post2} />
      <Post post={post3} /> */}
      <SearchResultsScreen />
    </SafeAreaView>
    </>
  );
}
