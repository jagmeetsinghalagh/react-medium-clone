import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import { getGlobalArticles } from '../actions/articleActions';
import { getTags } from '../actions/tagsActions';
import './styles/homecomponent-css.css';

class HomeComponent extends React.Component {

    componentDidMount = () => {
        this.props.getGlobalArticles();
        this.props.getTags();
    }

    render = () => {
        const { globalArticles, tags } = this.props;
        console.log(globalArticles);

        let tagsComponent = '';
        let globalArticlesComponent = '';
        if(tags.length > 0){
            tagsComponent = (
                <div className="tags">
                    <h6>Popular tags</h6>
                    {
                        tags.map(tag => {
                            return (
                                <span key={ tag } className="badge badge-pill">
                                    { tag }
                                </span>
                            )
                        })
                    }
                </div>
            )
        } else {
            tagsComponent = (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border tex-dark" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }

        if(globalArticles.length > 0){
            globalArticlesComponent = (
                <div className="globalArticles">
                    
                    {
                        globalArticles.map(article => {
                            return (
                                <div key={article.slug} className="article">
                                    <div className="user-section">
                                        <img className="img-rounded float-left" alt="No img" src={ article.author.image } />
                                        <h6>
                                            <Link>
                                                &nbsp;{ article.author.username }
                                            </Link>
                                        </h6>
                                        <p className="text-muted">&nbsp;<Moment fromNow>{ article.createdAt }</Moment></p>
                                    </div>
                                    <br />
                                    <div className="article-details">
                                        <span className="like-btn">
                                            <i className="fas fa-heart"></i>&nbsp;{ article.favoritesCount }
                                        </span>
                                        <h4>{ article.title }</h4>
                                        <p className="text-muted">{ article.description }</p>
                                        <Link><small className="text-muted">Read more...</small></Link>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            )
        } else {
            globalArticlesComponent = (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border tex-dark" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        

        return (
            <div className="container home-component">
                <div className="row">
                    <div className="col-md-8 offset-md-1">
                        <h3>Global Feed</h3>
                        <hr />
                        { globalArticlesComponent }
                    </div>
                    <div className="col-md-3">
                        { tagsComponent }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        globalArticles: state.globalArticles,
        tags: state.tags
    }
}

export default connect(mapStateToProps,{
    getGlobalArticles,
    getTags
})(HomeComponent);