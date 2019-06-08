import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import Navbar from './Navbar';
import LoginComponent from './LoginComponent';
import HomeComponent from './HomeComponent';
import RegisterComponent from './RegisterComponent';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomeComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/register" component={RegisterComponent} />
            </Switch>
        </Router>
    );
};

export default App;