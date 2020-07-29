import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/layouts/Navbar';
import Join from './components/Join';
import Chat from './components/Chat';
import Footer from "./components/layouts/Footer";

function App() {
    return (
        <Router>
            <Navbar />
            <Route path="/" exact component={Join} />
            <Route path="/chat" exact component={Chat} />
            <Footer />
        </Router>
    );
};

export default App;