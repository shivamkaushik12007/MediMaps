import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import '../css/home.css'
import Logo from '../images/logo.svg';
import { geolocated } from "react-geolocated";
import disableBrowserBackButton from 'disable-browser-back-navigation';

class Home extends Component{
    constructor(){
        super();
        this.state={
            search:"",
            redirectToPharmalist:false,
            long:null,
            lat:null
        }
    }
    componentDidMount(){
        disableBrowserBackButton();
    }
    render(){
        if(this.state.redirectToPharmalist){
            return <Redirect to={{
                pathname:'/pharmaList',
                state:{
                    medicine:this.state.search,
                    latitude:this.state.lat,
                    longitude:this.state.long
                }
            }}/>
        }
        return(
            <div className="MainThree">
                <div className="HomeOption">
                    <Link to="/signUp">SignUp</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/logIn">logIn</Link>
                </div>
                <div className="LogoDivThree">
                    <img src={Logo} alt="logo" className="LogoThree"/>
                </div>
                <div>
                    <form onSubmit={this._pharama}>
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
    _pharama=(event)=>{
        event.preventDefault();
        this.setState({
            search:this.refs.search.value,
            redirectToPharmalist:true,
            long:this.props.coords.longitude,
            lat:this.props.coords.latitude
        })
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 10000,
})(Home);