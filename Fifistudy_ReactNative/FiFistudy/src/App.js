import React from 'react';
import {
   StyleSheet,
   Text,
   View,
  } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import HamburgerMenu from './screens/HamburgerMenu/HamburgerMenu';
import Container from './components/Sentences/Container/Container.js';
import DetailScreen from './screens/screenDetailFilm/Container';
import MovieWatchScreen from './screens/screenWatchMovie/Container';

const Hamburger = DrawerNavigator({
  MovieWatchScreen: {screen: MovieWatchScreen},
  DetailScreen: {screen: DetailScreen},
  Container: { screen: Container},
  HomeScreen: { screen: HomeScreen },
}, {
  headerMode: 'none',
  contentComponent: props => <HamburgerMenu/>
});

export default Hamburger;