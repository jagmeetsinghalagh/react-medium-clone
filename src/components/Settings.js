import React from 'react';
import { connect } from 'react-redux';

import { updateUser } from '../actions/authActions';

class Settings extends React.Component {

    state = {
        imgUrl: this.props.user.image!==null ? this.props.user.image : '' ,
        username: this.props.user.username!==null ? this.props.user.username : '',
        bio: this.props.user.bio!==null ? this.props.user.bio : '',
        email: this.props.user.email!==null ? this.props.user.email : '',
        password: ''
    }

    

    onChangeHandler = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit = async () => {
        let body = {};
        if(this.state.password === ''){
            const {password, ...withoutPassword} =  this.state;
            body = {
                user: withoutPassword
            }
        } else {
            body = {
                user: this.state
            }
        }
        this.props.updateUser(body);
        this.props.history.push(`/profiles/${this.props.user.username}`);
        
    }

    render() {
        return (
            <div className="container settings">
                <h1 className="text-center mt-3 mb-5">Your Settings</h1>
                <form>
                    <div className="form-group">
                        <input name="imgUrl" value={this.state.imgUrl} onChange={this.onChangeHandler} type="text" placeholder="URL of profile picture" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input name="username" value={this.state.username} onChange={this.onChangeHandler} type="text" placeholder="Username" className="form-control form-control-lg" />
                    </div>
                    <div className="form-group">
                        <textarea name="bio" value={this.state.bio} onChange={this.onChangeHandler} type="text" placeholder="Short bio about you" className="form-control form-control-lg" />
                    </div>
                    <div className="form-group">
                        <input name="email" value={this.state.email} onChange={this.onChangeHandler} type="email" placeholder="Email" className="form-control form-control-lg" />
                    </div>
                    <div className="form-group">
                    <input name="password" value={this.state.password} onChange={this.onChangeHandler} type="password" placeholder="Password" className="form-control form-control-lg" />
                    </div>
                    <button type="button" onClick={this.handleSubmit} className="btn btn-lg btn-success float-right" >Update Settings</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    if(state.auth.user === null){
        return {
            user:{
                image: '',
                username: '',
                bio: '',
                email: '',
                password: ''
            }
        }
    } else{
        return {
            user: state.auth.user
        }
    }
}

export default connect(mapStateToProps,{
    updateUser
})(Settings);