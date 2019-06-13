import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProfile } from '../actions/profileActions';
import { getProfileArticles } from '../actions/articleActions';
import Loader from './subcomponents/Loader';
import ArticleList from './subcomponents/ArticleList';
import './styles/profile-css.css';

class Profile extends React.Component {

    componentDidMount = () => {
        const { username } = this.props.match.params;
        this.props.getProfile(username);
        this.props.getProfileArticles(username);
    }

    render = () => {
        const { profile,user } = this.props;

        if(profile){
            let button;
            if(user){
                if(user.username === profile.username ){
                    button = (
                        <Link to="/settings" className="btn btn-outline-secondary">
                            <i className="fas fa-cog"></i> Edit Profile info
                        </Link>
                    )
                } 
            } else{
                button = (
                    <button className="btn btn-outline-secondary  ">
                        <i className="fas fa-plus"></i>
                        &nbsp; Follow { profile.username }
                    </button>
                )
            }
            return (
                <div className="profile">
                    <div className="text-center">
                        <div className="profile-header">
                            <img className="img-rounded" src={profile.image} alt="No img available" />
                            <h4 className="username">{ profile.username }</h4>
                            {button}
                        </div>
                    </div>
                    <div className="container mt-3">
                        <div className="mt-4 col-md-8">
                                <ArticleList articleList={this.props.articleList} />
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
        articleList: state.articleList,
        user: state.auth.user
    }
}

export default connect(mapStateToProps,{
    getProfile,
    getProfileArticles
})(Profile);