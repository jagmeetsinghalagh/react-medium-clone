import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { BASE_URL } from '../actions/types';

class CreateArticle extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            body: '',
            tags: []
        }
    }

    onChangeHandler = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleKeyDown = (evt) => {
        if(evt.keyCode === 13){
            if(evt.target.value !== ''){
                this.setState({ tags: [...this.state.tags, evt.target.value] });
            }
        } 
    }

    onSubmitHandler = () => {
        this.createArticle();
    }

    createArticle = async () => {
        const body = {
            article: this.state
        }
        const { token } = this.props;
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        
        if(token){
            config.headers["Authorization"] = `Token ${token}`;
            let result = await axios.post(`${BASE_URL}/articles`,JSON.stringify(body),config);
            this.props.history.push(`/article/${result.data.article.slug}`)
        }
    }

    render(){
        let tags;
        tags = this.state.tags.map(tag => {
            return <span key={tag} className="badge badge-pill">
                {tag}
            </span>
        })

        return (
            <div className="container m-5">
                <form>
                    <div className="form-group" >
                        <input name="title" onChange={this.onChangeHandler}  className="form-control form-control-lg" placeholder="Article Title" />
                    </div>
                    <div className="form-group" >
                        <input name="description" onChange={this.onChangeHandler}  className="form-control form-control-lg" placeholder="What's this article about?" />
                    </div>
                    <div className="form-group" >
                        <textarea name="body" onChange={this.onChangeHandler}  className="form-control form-control-lg" placeholder="Write your article(in markdown)" />
                    </div>
                    <div className="form-group" >
                        <input name="tags" onKeyDown={this.handleKeyDown}  className="form-control form-control-lg" placeholder="Enter tags" />
                    </div>
                    <p className="form-control-lg">{ tags }</p>
                    <button  onClick={this.onSubmitHandler} type="button" className="btn btn-success btn-lg float-right">Publish Article</button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(CreateArticle);