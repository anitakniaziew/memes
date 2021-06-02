import React from 'react';
import { Provider } from 'react-redux'
import store from './store';
import MemeList from './components/MemeList'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MemeList/>
      </div>
    </Provider>
  );
}

export default App;
