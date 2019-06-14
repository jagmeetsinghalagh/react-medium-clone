import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import UserSectionComponent from './subcomponents/UserSectionComponent';
import Loader from './subcomponents/Loader';
import Comments from './subcomponents/Comments';
import { BASE_URL } from '../actions/types';
import './styles/articledetails-css.css';

class ArticleDetails extends React.Component {

    state = {
        article: null
    }

    componentDidMount = async () => {
        const { slug } = this.props.match.params;
        let result = await axios.get(`${BASE_URL}/articles/${slug}`);
        this.setState({ article: result.data.article });
    }

    onDeleteHandler = async () => {
        const token = this.props.token;
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        if(token){
            config.headers["Authorization"] = `Token ${token}`;
            await axios.delete(`${BASE_URL}/articles/${this.state.article.slug}`,config);
            this.props.history.push('/');
        }
    }

    render = () => {
        const { article } = this.state;
        const { user } = this.props;
        if(article){
            let buttons;
            if(user){
                if(user.username === article.author.username){
                    buttons = (
                        <div className="buttons">
                            <Link to="/article/create" className="btn btn-sm btn-outline-secondary mr-2 ">
                                <i className="fas fa-pencil-alt"></i> Edit Article
                            </Link>
                            <button onClick={this.onDeleteHandler} className="btn btn-sm btn-outline-danger">
                                <i className="fas fa-trash-alt"></i> Delete article
                            </button>
                        </div>
                    )
                }
            } else {
                buttons = (
                    <div className="buttons">
                        <button className="btn btn-sm btn-outline-secondary mr-2 ">
                            <i className="fas fa-plus"></i>
                            &nbsp; Follow { article.author.username }
                        </button>
                        <button className="btn btn-sm btn-outline-secondary  ">
                            <i className="fas fa-heart"></i>&nbsp; Favorite article({ article.favoritesCount })
                        </button>
                    </div>
                )
            }


            return (
                <div className="article-details">
                    <div className="article-header">
                        <h1>{ article.title }</h1>
                        <UserSectionComponent article={article} />
                        {buttons}
                    </div>
                    <div className="container article-body">
                        <ReactMarkdown
                            source={ article.body }
                            escapeHtml={false}
                            className="p-2"
                        />
                        <hr />
                    </div>
                    <div className="container p-3 comments-section">
                        <Comments slug={article.slug} />
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
        user: state.auth.user,
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(ArticleDetails);