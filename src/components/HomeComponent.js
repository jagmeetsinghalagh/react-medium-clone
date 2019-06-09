import React from 'react';
import { connect } from 'react-redux';

import { getGlobalArticles } from '../actions/articleActions';
import Loader from './subcomponents/Loader';
import TagsComponent from './subcomponents/TagsComponent';
import Article from './subcomponents/Article';
import './styles/homecomponent-css.css';

class HomeComponent extends React.Component {

    componentDidMount = () => {
        this.props.getGlobalArticles();
        
    }

    render = () => {
        const { articles } = this.props;
        let globalArticlesComponent = '';
        if(articles.length > 0){
            globalArticlesComponent = (
                <div className="globalArticles">
                    {
                        articles.map(article => {
                            return <Article key={article.slug} article={article} />
                        })
                    }
                </div>
            )
        } else {
            globalArticlesComponent = <Loader />
        }

        return (
            <div className="container home-component">
                <div className="row">
                    <div className="col-md-8 offset-md-1">
                        <h3>Global Feed</h3>
                        <hr />
                        { globalArticlesComponent }
                    </div>
                    <div className="col-md-3"><TagsComponent /></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps,{
    getGlobalArticles
})(HomeComponent);