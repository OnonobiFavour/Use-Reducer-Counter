import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Error from './Error';
import Nav from './Nav';
import ErrorBoundary from './ErrorBoundary';
import Home from './Home';
import Reducer from './Reducer';
import Counter from './Counter';



const App = () => {


  return (
    <ErrorBoundary>
    <Router>
      <Routes>

      <Route exact path='/' 
      element={
        <>
        <Nav />
      < Home />
        </>
      }>
      </Route>

      <Route exact path='/start' 
      element={
        <>
        <Nav />
      < Reducer />
        </>
      } />
        <Route exact path='/start/useCounter' element={<><Nav /> <Counter /></>} />

      <Route exact path='*' element={<Error />}></Route>

      </Routes>

    </Router>

    </ErrorBoundary>
  )
}

export default App