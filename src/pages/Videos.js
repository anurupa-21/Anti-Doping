import React from 'react';

const videos = [
  {
    id: 1,
    title: 'The Dangers of Performance-Enhancing Drugs in Sports',
    description: 'An educational video highlighting the dangers and consequences of using performance-enhancing drugs.',
    url: 'https://youtu.be/GRAiGitPj_8?si=E482znRKz1BMhau7',
    thumbnail: 'https://img.youtube.com/vi/GRAiGitPj_8/maxresdefault.jpg',

  },
  {
    id: 2,
    title: 'What is Anti-Doping? Explained in 10 Minutes',
    description: 'A short explanation of what anti-doping is and why it is critical for the integrity of sports.',
    url: 'https://youtu.be/kKFC61RJ4Gc?si=GkwF1BwXtvOHnAsl',
    thumbnail: 'https://img.youtube.com/vi/kKFC61RJ4Gc/maxresdefault.jpg',
  },
  {
    id: 3,
    title: 'How Do Anti-Doping Tests Work?',
    description: 'A detailed explanation of the process of anti-doping testing for athletes.',
    url: 'https://youtu.be/rf4wGNJumEA?si=U4HgsrBVuxwOG9hJ',
    thumbnail: 'https://img.youtube.com/vi/rf4wGNJumEA/maxresdefault.jpg',
  },
  {
    id: 4,
    title: 'The Importance of Clean Sport',
    description: 'Why clean sport matters and how athletes can stay clean for the integrity of their sport.',
    url: 'https://youtu.be/6NmfnZhBWTU?si=ck6PrBmMZyUu0G4r',
    thumbnail: 'https://img.youtube.com/vi/6NmfnZhBWTU/maxresdefault.jpg',
  },
];

const Videos = () => {
  return (
    <div style={styles.videoPage}>
      <h1 style={styles.title}>Anti-Doping Awareness Videos</h1>
      <div style={styles.videoGrid}>
        {videos.map((video) => (
          <div key={video.id} style={styles.videoCard}>
            <a href={video.url} target="_blank" rel="noopener noreferrer" style={styles.videoLink}>
              <img
                src={video.thumbnail}
                alt={video.title}
                style={styles.thumbnail}
              />
              <div style={styles.videoInfo}>
                <h2 style={styles.videoTitle}>{video.title}</h2>
                <p style={styles.videoDescription}>{video.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  videoPage: {
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
  videoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  videoCard: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  videoLink: {
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
  videoInfo: {
    padding: '10px',
    backgroundColor: '#fff',
  },
  videoTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#1a1a1a', // Darker color for the title for better visibility
  },
  videoDescription: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.4',
    marginBottom: '10px',
  },
};

export default Videos;
