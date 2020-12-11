import React, { useState } from 'react';
import DataTable from './components/table';

function App() {
  const [state, setState] = useState(0);
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>increment</button>
      <DataTable />
    </div>
  );
}

export default App;
