import React from 'react';
import { Link } from 'react-router-dom';

import UserSectionComponent from './UserSectionComponent';
import '../styles/article-css.css';

const Article = ({ article }) => {
    return (
        <div key={article.key} className="article">
            <UserSectionComponent article={article} />
            <br />
            <div className="article-details">
                <span className="like-btn">
                    <i className="fas fa-heart"></i>&nbsp;{ article.favoritesCount }
                </span>
                <h4>{ article.title }</h4>
                <p className="text-muted">{ article.description }</p>
                <Link to={`/article/${article.slug}`} ><small className="text-muted">Read more...</small></Link>
            </div>
            <hr />
        </div>
    );
}

export default Article;