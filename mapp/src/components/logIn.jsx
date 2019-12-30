import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import '../css/logIn.css';
import Logo from '../images/logo.svg';
import {Link} from 'react-router-dom';

class LogIn extends Component{
    render(){
        return (
            <div>
                <div className="Main Left">
                    <div><Link to='/home'><img src={Logo} className="Logo"/></Link></div>
                    <div><h1 className="Head">Welcome to the MediMaps <br/>Pharmacist Area...</h1></div>
                </div>
                <div className="Main Right">
                    <div className="Inside">
                        <div className="Text">LogIn</div>
                        <form>
                            <div className="form">
                                <div className="form-group">
                                    <input type="text" placeHolder="UserName" ref="userName" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <input type="password" placeHolder="Password" ref="password" className="form-control "></input>
                                </div>
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </form>
                        <div className="Choice">
                            <p style={{color:"#383838"}}>New User?
                                &nbsp;&nbsp;&nbsp;
                                <Link to='/signUp'>SignUp here!</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }  
}

export default LogIn;