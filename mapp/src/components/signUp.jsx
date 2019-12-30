import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Logo from '../images/logo.svg';
import '../css/signUp.css';
import {Link} from 'react-router-dom';

class SignUp extends Component{
    render(){
        return(
            <div className="MainTwo">
                <div>
                    <Link to='/home'><img src={Logo} alt='logo' className="LogoTwo"/></Link>
                </div>
                <div className="InsideTwo">
                    <form>
                        <div className="form">
                            <div className="form-group">
                                <input type="text" ref="userName" placeholder="Username" className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <input type="password" ref="password"  placeholder="Password" className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <input type="text" ref="name" placeholder="Name" className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <input type="email" ref="email" placeholder="E-mail" className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <input type="text" ref="address" placeholder="Address" className="form-control"></input>
                            </div>
                            <button type="submit" className="btn btn-success">SignUp</button>
                        </div>
                    </form>
                    <div className="BoxOne">
                        Already has account? 
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/logIn'>LogIn!</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;