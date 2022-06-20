import React from 'react';
import Button from './Button.js';

function handleClick(e) {
  console.log('CLIC', e);
}

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <Button onButtonClick={handleClick} />
    </div>
  );
}

export default App;
