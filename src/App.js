import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/template/Menu.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
		<Menu />
      </div>
    );
  }
}

export default App;
