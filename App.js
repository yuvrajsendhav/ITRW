import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/redux/store';
import StackNavigation from './src/Navigation/StackNavigation';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StackNavigation />
        </PersistGate>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({})