import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { FaGithub, FaPlayCircle } from 'react-icons/fa'; // Import icons from react-icons
import logo from './assets/logo-header.svg'; // Import the SVG file
import Mockup from './assets/Mockup.png'; // Import the SVG file

const App = () => {
  const [currentWord, setCurrentWord] = useState('Free');
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const words = ['    Free    ', 'Open Source'];
    let index = 0;

    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        index = (index + 1) % words.length;
        setCurrentWord(words[index]);
        setIsSliding(false);
      }, 1000); // This timeout should match the duration of the slide animation
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <Navbar />
      <header style={styles.header}>
        <div style={styles.logo}>
          <img src={logo} alt="eLabftw Logo" style={styles.logoImg} />
        </div>
        <h1 style={styles.mainTitle}>
          a <span style={{ ...styles.animatedWord, ...(isSliding && styles.sliding) }}>{currentWord}</span> electronic lab Notebook
        </h1>
        <h3 style={styles.subtitle}>Designed by researchers, for researchers, with usability in mind.</h3>
      </header>
      <div style={styles.buttonContainer}>
      <a href="https://demo.elabftw.net/login.php" target="_blank" rel="noopener noreferrer">
        <button style={{ ...styles.button, ...styles.signUpBtn }}>
          <FaPlayCircle style={styles.icon} /> Demo LIVE
        </button>
        </a>
        <a href="https://github.com/elabftw/elabftw" target="_blank" rel="noopener noreferrer">
          <button style={{ ...styles.button, ...styles.githubBtn }}>
            <FaGithub style={styles.icon} /> GitHub
          </button>
        </a>
      </div>
      <div style={styles.Mockup}>
          <img src={Mockup} alt="" style={styles.Mockup} />
        </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    background: 'linear-gradient(135deg, #32a4a8 0%, #23b88d 50%, #32a4a8 100%)',
    minHeight: '100vh',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: '60px',
  },
  logo: {
    marginBottom: '20px', // Add space between the logo and the title
  },
  logoImg: {
    height: '100px', // Adjust the height as needed
    width: 'auto',  // Maintain aspect ratio
  },
  Mockup: {
    height: '700px', // Adjust the height as needed
    width: 'auto',  // Maintain aspect ratio
    borderRadius: '8px'
  },
  mainTitle: {
    fontSize: '3rem',
    margin: '1rem 0', // Reduce margin to make room for h3
    position: 'relative',
    height: '4rem', // To prevent jumping of content due to sliding
    overflow: 'hidden', // To hide the words when they slide out
    display: 'inline-block', // Ensure the span stays next to the text
    verticalAlign: 'middle', // Align span vertically with text
  },
  subtitle: {
    marginTop: '1rem', // Add space between h1 and h3
    fontSize: '1.25rem',
  },
  animatedWord: {
    display: 'inline-block',
    transition: 'transform 1s ease-in-out',
    verticalAlign: 'middle', // Align the sliding word vertically with the text
  },
  sliding: {
    transform: 'translateY(-100%)', // Slide up the word
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem',
    marginTop: '1.5rem', // Add top margin to the button container
  },
  button: {
    padding: '12px 24px', // Increase padding for more space inside the button
    borderRadius: '8px', // Reduce the radius to make buttons less rounded
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    color: '#fff', // Ensure the text is visible
    display: 'flex', // Align icon and text
    alignItems: 'center',
    gap: '0.5rem', // Space between icon and text
    transition: 'background-color 0.3s ease',
  },
  signUpBtn: {
    backgroundColor: '#29e6d3', // Example color for the sign-up button
  },
  githubBtn: {
    backgroundColor: '#333', // Example color for the GitHub button
  },
  icon: {
    fontSize: '1.25rem', // Size of the icons
  },
};

export default App;
