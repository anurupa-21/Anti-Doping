import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Animations = () => {
    const [isContentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setContentVisible(true);
        }, 500); // Delay to start animation after 0.5 seconds

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <PageContainer>
            <MainTitle className={isContentVisible ? 'fade-in' : ''}>
                The Battle Against Doping in Sports
            </MainTitle>

            <Content className={isContentVisible ? 'slide-in' : ''}>
                <p>
                    Anti-doping efforts aim to protect the integrity of sport by ensuring that athletes compete on a level
                    playing field. Doping undermines fair competition, leading to a culture of cheating and putting athletes'
                    health at risk.
                </p>
            </Content>

            <Content className={isContentVisible ? 'slide-in' : ''}>
                <h2>Banned Substances</h2>
                <ul>
                    <li>Stimulants (e.g., caffeine, ephedrine)</li>
                    <li>Anabolic Steroids</li>
                    <li>Blood Doping (e.g., Erythropoietin, EPO)</li>
                    <li>Gene Doping</li>
                </ul>
            </Content>

            <Content className={isContentVisible ? 'slide-in' : ''}>
                <h2>The Anti-Doping Code</h2>
                <p>
                    The World Anti-Doping Agency (WADA) has established a global framework for anti-doping. Athletes are
                    regularly tested for prohibited substances, and violations can result in suspensions, bans, or fines.
                </p>
            </Content>

            <Content className={isContentVisible ? 'slide-in' : ''}>
                <h2>Anti-Doping Animation</h2>
                <div>
                    {/* Add an external animation or GIF here */}
                    <img 
                        src="animation.jpg" 
                        alt="Anti-Doping Animation"
                        style={{ width: '100%', maxWidth: '600px' }}
                    />
                </div>
                <p>
                    This animation illustrates the importance of staying clean and competing fairly in sports.
                </p>
            </Content>
        </PageContainer>
    );
};

// Styled Components
const PageContainer = styled.div`
    padding: 40px;
    background-color: #111;
    color: white;
    text-align: center;
    min-height: 100vh;
`;

const MainTitle = styled.h1`
    font-size: 2.5em;
    opacity: 0;
    transform: translateY(-50px);
    transition: opacity 1s ease, transform 1s ease;

    &.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Content = styled.div`
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 1s ease, transform 1s ease;
    margin: 30px 0;

    &.slide-in {
        opacity: 1;
        transform: translateX(0);
    }

    h2 {
        font-size: 2em;
        color: #ff6347; /* Tomato color for section headers */
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    ul li {
        font-size: 1.5em;
        margin: 10px 0;
    }

    ul li:hover {
        color: #ff6347;
        cursor: pointer;
    }
`;

export default Animations;
