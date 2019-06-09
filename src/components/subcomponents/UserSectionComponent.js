import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

import '../styles/usersection-css.css';

const UserSectionComponent = ({ article }) => {
    return (
        <div className="user-section">
            <img className="img-rounded float-left" alt="No img" src={ article.author.image } />
            <h6>
                <Link to={`/profiles/${article.author.username}`}>
                    &nbsp;{ article.author.username }
                </Link>
            </h6>
            <p className="text-muted">&nbsp;<Moment fromNow>{ article.createdAt }</Moment></p>
        </div>
    )
}

export default UserSectionComponent;