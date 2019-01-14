import React, { Component } from 'react';
import './App.css';
import Address from './Address/components/Address';

class App extends Component {
  render() {
    return (

      <div class="app-box">
        <div class="app-header">
          <div class="app-content">
            <Address />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
