import React, {useState, useEffect} from 'react';
import Router from './Router.js'
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <Router />
    </>
  );
};


export default App;
