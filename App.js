/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {Provider} from 'react-redux';
import AppRoute from './src/navigation/appRoute';
import {store} from './src/redux/store';

const App = () => {
  //Add a provider and  Main-Stack Navigation
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
};

export default App;
