import React from 'react';

import { Link } from 'react-router-dom';
import './styles/logincomponent-css.css';

class LoginComponent extends React.Component {

    state = {
        'email': '',
        'password': ''
    }

    onChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render = () => {
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="login-component">
                        <h1 className="text-center">Sign in</h1>
                        <p className="text-center"><Link to="/register">Need an account?</Link></p>
                        <form onSubmit={this.onSubmitHandler} className="login-form" noValidate>
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control" 
                                placeholder="Email"
                                onChange={this.onChangeHandler}
                            />
                            <input 
                                type="password" 
                                name="password" 
                                className="form-control"
                                placeholder="password"
                                onChange={this.onChangeHandler}
                            />
                            <button type="submit" className="btn btn-lg float-right" >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;