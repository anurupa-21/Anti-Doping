// /src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Assuming Navbar.js is in the components folder
import Home from './pages/Home'; // Assuming Home.js is in the pages folder
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Resources from './pages/Resources';
import Articles from './pages/Articles';
import Videos from './pages/Videos';
import Audios from './pages/Audios';
import Infographics from './pages/Infographics';
import Animations from './pages/Animations';
import Quizzes from './pages/Quizzes';
import Auth from "./pages/Auth";
import LeaderboardAchievements from "./pages/LeaderboardAchievements";
import ResetPassword from './pages/ResetPassword';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css'; // Import global styles for the entire app

function App() {
  return (
    <Router>
      <Navbar /> {/* Render Navbar at the top of every page */}
      <div className="app-container">
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/articles" element={<Articles />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/audios" element={<Audios />} />
        <Route path="/infographics" element={<Infographics />} />
        <Route path="/animations" element={<Animations />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/leaderboardachievements" element={<LeaderboardAchievements />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/terms" element={<TermsOfService/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />


      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
