import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentList from './CommentList';
import { getComments,addComment } from '../../actions/commentActions';
import Loader from './Loader'; 
import '../styles/comments-css.css';

class Comments extends React.Component {

    state = {
        commentBody: ''
    }

    componentDidMount = () => {
        this.props.getComments(this.props.slug);
    }

    onChangeHandler = (evt) => {
        this.setState({ commentBody: evt.target.value });
    }

    onCommentSubmit = async () => {
        let { slug } = this.props;
        let body = {
            comment: {
                body: this.state.commentBody
            }
        }
        this.props.addComment(slug,body);
        this.setState({ commentBody: ''});
        this.props.getComments(slug);
    }

    render = () => {
        const { commentList } = this.props;
        let commentHeader;
        if(this.props.isAuthenticated){
            commentHeader = (
                <div className="card mb-3">
                    <form>
                        <textarea value={this.state.commentBody} onChange={this.onChangeHandler} style={{ height: '7rem', border: 'none' }} name="body" type="text" placeholder="Write a comment..." className="form-control form-control-lg" />
                    </form>
                    <div style={{maxHeight: '3.5rem'}} className="card-footer">
                        <button onClick={this.onCommentSubmit}  className="btn btn-success float-right">
                            Post Comment
                        </button>
                    </div>
                </div>
            )
        } else {
            commentHeader = (
                <p className="mb-3 lead"><Link to="/login" >Sign in</Link> or   <Link to="/register" >sign up</Link> to add comments on this    article.
                </p>
            )
        }
        
        if(!commentList.isLoading){
            return (
                <Fragment>
                    { commentHeader }
                    {commentList.comments.length > 0 ? (
                            <CommentList comments={commentList.comments} />
                        ) : (
                            <p>No comments available</p>
                        )
                    }
                </Fragment>
            )
        } else {
            return <Loader />
        }
    }

}

const mapStateToProps = (state) => {
    return {
        commentList: state.commentList,
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated,
        token: state.auth.token
    }
}

export default connect(mapStateToProps,{
    getComments,
    addComment
})(Comments);