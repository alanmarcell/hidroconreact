import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import OffCanvas from './components/OffCanvas'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <OffCanvas />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
