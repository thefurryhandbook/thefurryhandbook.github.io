import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import IntroToTheFurryFandom from './pages/IntroToTheFurryFandom';
import CommissioningYourFirstFursuit from './pages/CommissioningYourFirstFursuit';
import MainTemplate from './templates/MainTemplate';

function AppRouter() {
return (
    <Router>
        <MainTemplate>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/intro-to-the-furry-fandom" element={<IntroToTheFurryFandom />} />
                <Route path="/commissioning-your-first-fursuit" element={<CommissioningYourFirstFursuit />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </MainTemplate>
    </Router>
    ); 
}
    
  
export default AppRouter;