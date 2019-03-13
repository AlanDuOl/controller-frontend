import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/template/Header'
import Content from './components/template/Content'
import Footer from './components/template/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
		      <Header />
          <Content />
          <Footer />
      </div>
    );
  }
}

export default App;
