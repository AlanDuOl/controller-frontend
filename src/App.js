import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/template/Header.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
		      <Header />
      </div>
    );
  }
}

export default App;
