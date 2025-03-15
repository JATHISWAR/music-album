import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import CollectionDetailsPage from './pages/collectionDetails/CollectionDetailsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/details/:name" element={<CollectionDetailsPage />} />
            </Routes>
        </Router>
    );
}

export default App;