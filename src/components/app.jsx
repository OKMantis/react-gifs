import React, { Component } from 'react';

class App extends Component {
  render() {
    return(
      <div>
        <div className="left-scene"></div>
          <SearchBar />
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;