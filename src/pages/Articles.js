import React from 'react';

const articles = [
  {
    id: 1,
    title: 'The Importance of Clean Sports',
    description: 'Understanding why clean sports matter and the steps athletes can take to maintain integrity.',
    link: 'https://usawaterpolo.org/news/2024/1/12/general-what-is-clean-sport-and-why-does-it-matter.aspx#:~:text=CLEAN%20SPORT%20IS%20ABOUT%20FAIRNESS,integrity%20and%20fairness%20to%20sport.',
  },
  {
    id: 2,
    title: 'Nutrition Tips for Athletes',
    description: 'Discover the best nutrition practices for athletes to enhance performance.',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3805623/',
  },
  {
    id: 3,
    title: 'Training Techniques for Peak Performance',
    description: 'Learn about advanced training techniques used by top athletes.',
    link: 'https://sportsandfitnessexchange.com/blogs/news/effective-training-techniques-for-improving-performance-in-sports',
  },
  {
    id: 4,
    title: 'Mental Health in Sports',
    description: 'How athletes can maintain mental well-being while competing.',
    link: 'https://www.massgeneralbrigham.org/en/about/newsroom/articles/the-importance-of-mental-health-in-sports',
  },
  {
    id: 5,
    title: 'Recovery and Injury Prevention',
    description: 'Tips on recovering quickly and preventing injuries during training.',
    link: 'https://www.hopkinsmedicine.org/health/conditions-and-diseases/sports-injuries/preventing-sports-injuries',
  },
];

const Articles = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px',color:'black'}}>Articles</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {articles.map((article) => (
          <div
            key={article.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '15px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2 style={{ fontSize: '20px', margin: '10px 0' }}>{article.title}</h2>
            <p style={{ fontSize: '16px', color: '#555' }}>{article.description}</p>
            <a
              href={article.link}
              style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;

