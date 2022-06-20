import React from 'react';

export default function Button({ onButtonClick }) {
  return (
    <button onClick={onButtonClick} style={{ backgroundColor: 'blue' }}>
      Submit
    </button>
  );
}
