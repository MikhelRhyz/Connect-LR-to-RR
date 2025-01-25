import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
 const hello = function(){
  return "HI";
 }

  return (
    <div className="App">
      <p>{hello()}</p>
    </div>
  );
}

export default App;
