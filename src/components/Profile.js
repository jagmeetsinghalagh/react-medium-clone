import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProfile } from '../actions/profileActions';
import { getProfileArticles } from '../actions/articleActions';
import Loader from './subcomponents/Loader';
import Article from './subcomponents/Article';
import './styles/profile-css.css';

class Profile extends React.Component {

    componentDidMount = () => {
        const { username } = this.props.match.params;
        this.props.getProfile(username);
        this.props.getProfileArticles(username);
    }

    render = () => {
        const { profile,articles } = this.props;

        if(profile){
            return (
                <div className="profile">
                    <div className="text-center">
                        <div className="profile-header">
                            <img className="img-rounded" src={profile.image} alt="No img available" />
                            <h4 className="username">{ profile.username }</h4>
                            <button className="btn btn-outline-secondary  ">
                                <i className="fas fa-plus"></i>
                                &nbsp; Follow { profile.username }
                            </button>
                        </div>
                    </div>
                    <div className="container mt-3">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <Link className="nav-link" href="#" >My articles</Link>    
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#" >Favorited articles</Link> 
                            </li>
                        </ul>
                        <div className="mt-4 col-md-8">
                                { articles.length > 0 &&
                                    articles.map(article => {
                                        return <Article key={article.slug} article={article} />
                                    })
                                }
                            </div>
                    </div>
                </div>
           );
        } else {
            return <Loader />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        articles: state.articles
    }
}

export default connect(mapStateToProps,{
    getProfile,
    getProfileArticles
})(Profile);