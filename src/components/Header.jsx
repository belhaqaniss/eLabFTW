import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Free", "Open Source"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <header style={styles.header}>
      <h1 style={styles.mainTitle}>
        a <span className="animatedWord">{words[currentWord]}</span> electronic lab Notebook
      </h1>
    </header>
  );
}

const styles = {
  header: {
    textAlign: 'center',
    padding: '50px 0',
  },
  mainTitle: {
    fontSize: '32px',
    color: 'white',
  },
};

export default Header;
