import React from 'react';

const Infographics = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Anti-Doping Story</h1>

            <div style={styles.section}>
                <h2>Introduction to Anti-Doping</h2>
                <p>
                    Anti-doping refers to the practices and regulations that aim to prevent athletes from using banned substances
                    or methods to enhance performance in sports. The World Anti-Doping Agency (WADA) was established in 1999
                    to coordinate global efforts against doping in sports.
                </p>
            </div>

            <div style={styles.section}>
                <h2>The History of Doping</h2>
                <p>
                    Doping in sports has existed for centuries. In the early 20th century, athletes began using stimulants to
                    improve their performance. In the 1960s, the use of anabolic steroids became widespread. This led to major
                    scandals, and anti-doping measures became a priority for sports organizations.
                </p>
            </div>

            <div style={styles.section}>
                <h2>WADA Regulations and Testing</h2>
                <p>
                    The World Anti-Doping Agency (WADA) was formed to oversee global anti-doping efforts. WADA establishes
                    and updates a list of banned substances and methods. Athletes are tested for doping during competitions
                    and out-of-competition. Violations can result in suspensions, fines, and lifetime bans.
                </p>
            </div>

            <div style={styles.section}>
                <h2>Famous Doping Scandals</h2>
                <p>
                    Throughout history, many athletes have been caught doping, leading to public scandals. Some of the most
                    famous cases include Lance Armstrong’s Tour de France victories and Marion Jones’ Olympic medals. These
                    cases brought global attention to the issue of doping and its consequences.
                </p>
            </div>

            <div style={styles.section}>
                <h2>The Future of Anti-Doping</h2>
                <p>
                    The future of anti-doping efforts will focus on advancements in technology for detecting performance-enhancing
                    substances and methods. Genetic testing, biomarkers, and artificial intelligence are expected to play an
                    increasingly important role in the fight against doping in sports.
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white', // Ensuring the text is readable against the black background
        minHeight: '100vh', // Ensuring the page takes full height
    },
    title: {
        color: 'white',
        marginBottom: '20px',
    },
    section: {
        background: '#333', // Dark background for each section
        padding: '20px',
        margin: '20px 0',
        border: '1px solid #444',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
};

export default Infographics;



