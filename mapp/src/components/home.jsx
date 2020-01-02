import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import '../css/home.css'
import Logo from '../images/logo.svg';
class Home extends Component{
    constructor(){
        super();
        var state={
            search:null
        }
    }
    render(){
        return(
            <div className="MainThree">
                <div className="LogoDivThree">
                    <img src={Logo} className="LogoThree"/>
                </div>
                <div>
                    <form>
                        <div>
                            <input type="text" ref="search"  placeholder="Search Medicine here..." className="Search"/>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Home;