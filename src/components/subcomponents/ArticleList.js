import React from 'react';

import Article from './Article';
import Loader from './Loader';

const ArticleList = ({ articleList }) => {
    if(!articleList.isLoading){
        if(articleList.articles.length > 0){
            return articleList.articles.map(article => {
                return <Article key={article.slug} article={article} />
            });
        } else {
            return <p>No articles Found..</p>
        }    
    } else {
       return <Loader />
    }   
}

export default ArticleList;