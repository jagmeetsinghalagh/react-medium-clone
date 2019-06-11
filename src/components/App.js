import React,{ Component } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route 
} from 'react-router-dom';
import { connect } from 'react-redux';

import { loadUser } from '../actions/authActions';
import Navbar from './Navbar';
import LoginComponent from './LoginComponent';
import HomeComponent from './HomeComponent';
import RegisterComponent from './RegisterComponent';
import Profile from './Profile';
import ArticleDetails from './ArticleDetails';
 
class App extends Component {

    componentDidMount = () => {
        this.props.loadUser();
    }

    render = () => {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={HomeComponent} />
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/register" component={RegisterComponent} />
                    <Route path="/profiles/:username" component={Profile} />
                    <Route path="/article/:slug" component={ArticleDetails} />
                </Switch>
            </Router>
        );
    }
};

export default connect(null,{
    loadUser
})(App);