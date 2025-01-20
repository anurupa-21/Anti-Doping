import React from 'react';
import './LeaderboardAchievements.css';

const LeaderboardAchievements = () => {
  // Sample data for leaderboard and achievements
  const leaderboardData = [
    { rank: 1, name: 'Player One', score: 1500, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { rank: 2, name: 'Player Two', score: 1200, avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { rank: 3, name: 'Player Three', score: 1000, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { rank: 4, name: 'Player Four', score: 800, avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { rank: 5, name: 'Player Five', score: 750, avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { rank: 6, name: 'Player Six', score: 720, avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { rank: 7, name: 'Player Seven', score: 700, avatar: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { rank: 8, name: 'Player Eight', score: 650, avatar: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { rank: 9, name: 'Player Nine', score: 600, avatar: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { rank: 10, name: 'Player Ten', score: 550, avatar: 'https://randomuser.me/api/portraits/men/10.jpg' },
  ];

  const achievementsData = [
    { title: 'First Game Played', description: 'Congratulations on playing your first game. Keep it up!', date: '2025-01-15' },
    { title: '100 Points Scored', description: 'You’ve scored 100 points! A great start!', date: '2025-01-14' },
    { title: 'Perfect Quiz Completion', description: 'You completed a quiz with perfect accuracy. Amazing!', date: '2025-01-10' },
    { title: 'Top Scorer of the Week', description: 'You’ve achieved the highest score of the week. Well done!', date: '2025-01-05' },
  ];

  return (
    <div className="leaderboard-achievements-container">
      <div className="leaderboard-section">
        <h1 className="leaderboard-section-h1" >See Where You Are!
          
        <img className="leaderboard-section-h1-img" src="medal.jpg" alt="Player One" /></h1> 
        
        <h2 className="h2">Leaderboard</h2>
        <div className="top-players">
          <div className="top-player rank-1">
            <span className="rank-badge">1</span>
            <img className="player-avatar" src={leaderboardData[0].avatar} alt="Player One" />
            <p>{leaderboardData[0].name}</p>
            <p className="score">{leaderboardData[0].score}</p>
          </div>
          <div className="top-player rank-2">
            <span className="rank-badge">2</span>
            <img className="player-avatar" src={leaderboardData[1].avatar} alt="Player Two" />
            <p>{leaderboardData[1].name}</p>
            <p className="score">{leaderboardData[1].score}</p>
          </div>
          <div className="top-player rank-3">
            <span className="rank-badge">3</span>
            <img className="player-avatar" src={leaderboardData[2].avatar} alt="Player Three" />
            <p>{leaderboardData[2].name}</p>
            <p className="score">{leaderboardData[2].score}</p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Avatar</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.slice(3).map((player) => (
              <tr key={player.rank}>
                <td><span className={`rank-badge rank-${player.rank}`}>{player.rank}</span></td>
                <td>{player.name}</td>
                <td><img className="player-avatar" src={player.avatar} alt={`${player.name}'s Avatar`} /></td>
                <td>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="achievements-section">
        <h2 className="h2">Achievements</h2>
        <ul>
          {achievementsData.map((achievement, index) => (
            <li key={index}>
              <strong>{achievement.title}</strong>
              <p>{achievement.description}</p>
              <span className="achievement-date">Achieved on: {achievement.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeaderboardAchievements;




