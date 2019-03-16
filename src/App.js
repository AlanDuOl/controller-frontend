import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from './components/template/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Content />
      </div>
    );
  }
}

export default App;
