import React from 'react';
import Theapp from './Components/the-app';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        
        <Theapp />
      </header>
    </div>
  );
}

export default App;
