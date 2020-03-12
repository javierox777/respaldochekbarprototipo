import React from 'react';
import Navigations from './component/navigations'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import  'bootstrap/dist/css/bootstrap.min.css'
import Locales from './component/locales'

import './App.css';

function App() {
  return (
    <Router>
   <Navigations/>
   <Route path='/'exact component={Locales}/>

   </Router>
  );
}

export default App;
