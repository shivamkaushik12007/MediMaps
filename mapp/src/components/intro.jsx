import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../node_modules/font-awesome/css/font-awesome.css'
import '../css/intro.css'
import Logo from '../images/logo.svg';
import Login from '../images/login.svg';
import Signup from '../images/signup.svg';
import Line from '../images/line.svg';
class Intro extends Component{
    render(){
        return(
            <div className="Main">
                <div className="CrossDiv">
                    <Link to='/home'><i className="fa fa-times Cross" ></i></Link>
                </div>
                <div className="LogoDiv">
                    <Link to='/home'><img src={Logo} className="Logo"/></Link>
                </div>
                <div className="OptionDiv">
                    <div>
                        <Link to='/logIn'><img src={Login} className="Option Options" /></Link>
                    </div>
                    <div>
                        <img src={Line} className="Line Options"/>
                    </div>
                    <div>
                        <Link to='/signUp'><img src={Signup} className="Option Options"/></Link>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Intro;