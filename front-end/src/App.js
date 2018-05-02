import React from 'react';
import Header from './components/header/header'
import './App.css';

const App = props => ({
  render() {
    return (
      <div>
        <Header/>
        <main>{props.children}</main>
      </div>
    );
  }
});

export default App;
