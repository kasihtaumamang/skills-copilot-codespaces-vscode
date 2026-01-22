import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <section className="hero-section">
          <h1>Welcome to Our Website</h1>
          <p>Experience the power of dark mode with our enhanced Navbar component.</p>
        </section>
        <section className="content-section">
          <h2>Features</h2>
          <ul>
            <li>Toggle between dark and light mode</li>
            <li>Theme preference persists in localStorage</li>
            <li>Smooth animations and hover effects</li>
            <li>Fully responsive design</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
