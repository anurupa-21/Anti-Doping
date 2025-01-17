import React from 'react';

const audios = [
  {
    id: 1,
    title: 'Understanding Anti-Doping in Sports',
    description: 'A podcast episode explaining the importance of anti-doping in preserving the integrity of sports.',
    url: 'https://open.spotify.com/show/3zvgSSQU03qE5sebKRJMdS?si=c5a07b91d9b34352',
   
  },
  {
    id: 2,
    title: 'The Consequences of Doping in Athletes',
    description: 'An insightful discussion on the long-term effects of doping and its impact on athletes\' careers and health.',
    url: 'https://open.spotify.com/show/3zvgSSQU03qE5sebKRJMdS?si=c5a07b91d9b34352',
    
  },
  {
    id: 3,
    title: 'How Anti-Doping Tests Are Conducted',
    description: 'An audio clip explaining the procedures and science behind anti-doping tests.',
    url: 'https://open.spotify.com/show/3zvgSSQU03qE5sebKRJMdS?si=c5a07b91d9b34352',
    
  },
  {
    id: 4,
    title: 'Clean Sports: The Future of Fair Play',
    description: 'A motivational podcast encouraging athletes to maintain integrity and follow anti-doping regulations.',
    url: 'https://open.spotify.com/show/3zvgSSQU03qE5sebKRJMdS?si=c5a07b91d9b34352',
    
  },
];

const Audio = () => {
  return (
    <div style={styles.audioPage}>
      <h1 style={styles.title}>Anti-Doping Educational Audio</h1>
      <div style={styles.audioGrid}>
        {audios.map((audio) => (
          <div key={audio.id} style={styles.audioCard}>
            <a href={audio.url} target="_blank" rel="noopener noreferrer" style={styles.audioLink}>
              
              <div style={styles.audioInfo}>
                <h2 style={styles.audioTitle}>{audio.title}</h2>
                <p style={styles.audioDescription}>{audio.description}</p>
                <button style={styles.playButton}>Play</button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  audioPage: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f4f9', // Light background for a clean look
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333', // Dark text for contrast
  },
  audioGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  audioCard: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  audioLink: {
    textDecoration: 'none',
    color: '#000',
    display: 'block',
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    transition: 'transform 0.3s ease-in-out',
  },
  audioInfo: {
    padding: '10px',
    backgroundColor: '#fff',
  },
  audioTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#1a1a1a', // Darker color for the title for better visibility
  },
  audioDescription: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.4',
    marginBottom: '10px',
  },
  playButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50', // Green play button for positive action
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
};

export default Audio;

