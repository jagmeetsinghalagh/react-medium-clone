import React, { Fragment } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

import { BASE_URL } from '../../actions/types';
import '../styles/comments-css.css';

class Comments extends React.Component {

    state = {
        comments: []
    }

    componentDidMount = async () => {
        const { slug } = this.props;
        let result = await axios.get(`${BASE_URL}/articles/${slug}/comments`);
        this.setState({ comments: result.data.comments });
    }

    render = () => {
        const { comments } = this.state;
        if(comments.length > 0){
            return (
                <Fragment>
                    <p className="mb-3 lead"><Link to="/login" >Sign in</Link> or <Link to="/register" >sign up</Link> to add comments on this article.</p>
                    {   
                        comments.map(comment => {
                            return  (
                                <div key={ comment.id } className="comment card">
                                    <div className="card-body">
                                        { comment.body }
                                    </div>
                                    <div className="card-footer d-flex">
                                        <img className="img-rounded" src={comment.author.image} alt="noimg" />
                                        <small className="text-muted">
                                            <Link to={`/profiles/${comment.author.username}`}>&nbsp;{ comment.author.username }</Link>&nbsp;
                                            <Moment fromNow>{ comment.createdAt }</Moment>
                                        </small>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Fragment>
            )
        } else {
            return <p>No comments!</p>
        }
    }

}

export default Comments;