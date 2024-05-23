import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <header>
        <h1>TechXperience</h1>
      </header>
      <main>
        <section className="intro">
          <h2>Welcome to TechXperience!</h2>
          <p>Explore the latest in technology innovation and trends.</p>
          <p>Enter your name to get started:</p>
          <input type="text" value={name} onChange={handleInputChange} placeholder="Enter your name" />
          <button onClick={handleButtonClick}>Start Exploring</button>
          <p>You've clicked the button {count} times.</p>
        </section>
        <section className="features">
          <h2>Featured Technologies</h2>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Blockchain</li>
            <li>Internet of Things (IoT)</li>
            <li>Augmented Reality (AR)</li>
            <li>Virtual Reality (VR)</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>© 2024 TechXperience. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;



