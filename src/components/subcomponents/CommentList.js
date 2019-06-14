import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const CommentList = (props) => {
    let { comments } = props;
    return (
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
                        {props.user.username === comment.author.username &&     (
                            <i onClick={() => props.onCommentDelete(comment.id)} style={{ cursor: 'pointer' }} className="fas        fa-trash-alt ml-5"></i>
                         )
                        }
                    </div>
                </div>
            )
        })
    )
}

export default CommentList;