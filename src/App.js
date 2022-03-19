import React from 'react';
import '../src/App';

import Fav from './views/Fav';
import Home from './views/Home';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { store } from './store/store';
import { Provider } from 'react-redux';

function App() {

  
  return (
    <Provider store={store}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={ <Home /> } />
        <Route path='/favoritos' element={ <Fav /> }/>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
