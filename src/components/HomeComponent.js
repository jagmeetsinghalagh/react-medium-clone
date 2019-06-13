import React from 'react';
import { connect } from 'react-redux';

import { getGlobalArticles } from '../actions/articleActions';
import TagsComponent from './subcomponents/TagsComponent';
import ArticleList from './subcomponents/ArticleList';
import './styles/homecomponent-css.css';

class HomeComponent extends React.Component {

    componentDidMount = () => {
        this.props.getGlobalArticles();   
    }

    render = () => {
        return (
            <div className="container home-component">
                <div className="row">
                    <div className="col-md-8 offset-md-1">
                        <h3>Global Feed</h3>
                        <hr />
                        <div className="global-articles">
                            <ArticleList articleList={this.props.articleList} />
                        </div>                    
                    </div>
                    <div className="col-md-3"><TagsComponent /></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.articleList
    }
}

export default connect(mapStateToProps,{
    getGlobalArticles
})(HomeComponent);