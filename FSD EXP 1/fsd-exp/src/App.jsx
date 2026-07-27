import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="app-container">
      <div className="counter-card">
        <h2>Live Character Counter</h2>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Type your text here..."
        />
        <div className="stats">
          <p>Character count: {text.length}</p>
        </div>
      </div>
    </div>
  );
}

export default App;