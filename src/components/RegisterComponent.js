import React from 'react';

import { Link } from 'react-router-dom';
import './styles/registercomponent-css.css';

class RegisterComponent extends React.Component {

    state = {
        'username': '',
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

    render = () =>{
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="register-component">
                        <h1 className="text-center">Sign up</h1>
                        <p className="text-center"><Link to="/login">Have an account?</Link></p>
                        <form onSubmit={this.onSubmitHandler} className="register-form" noValidate>
                            <input
                                type="text"
                                name="username"
                                className="form-control"
                                placeholder="Username"
                                onChange={this.onChangeHandler}
                            />
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

export default RegisterComponent;