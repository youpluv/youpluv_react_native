import React, {useState, useEffect} from 'react';
import Router from './Router.js'
import { StatusBar } from 'react-native';

const App = () => {
import Input from './src/components/Input'
  return (
    <>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <Router />
    </>
  );
};


export default App;
