import React from 'react';
import LiveLanes from "pages/liveLanes"
import Header from "components/header"
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <LiveLanes />
      </div>
    </div>
  );
}

export default App;
