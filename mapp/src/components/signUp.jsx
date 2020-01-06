import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Logo from '../images/logo.svg';
import '../css/signUp.css';
import {Link} from 'react-router-dom';
import { geolocated } from "react-geolocated";

class SignUp extends Component{
    constructor(){
        super();
        this.state={
            redirectToListHome: false
        }
    }
    // componentDidMount(){
    //     console.log(this.props.coords.longitude)
    // }
    // async componentDidMount(){
    //     const response=await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=b03590ce4cee4f55a4a020c91b36b151");
    //     const data=await response.json();
    //     this.setState({longitude:data.longitude,latitude:data.latitude});
    //     console.log(data.latitude+" yesn "+data.longitude);
    // }
    render(){

        if(this.state.redirectToListHome){
            return <Redirect to="/mediList"/>
        }

        return(
            <div className="MainTwo">
                <div>
                    <Link to='/home'><img src={Logo} alt='logo' className="LogoTwo"/></Link>
                </div>
                <div className="InsideTwo">
                    <form onSubmit={this._addUser}>
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
                                <input type="number" ref="phone" placeholder="Mobile Number" className="form-control"></input>
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
    _addUser=(event)=>{
        event.preventDefault();
        let user={
            userName:this.refs.userName.value,
            password:this.refs.password.value,
            name:this.refs.name.value,
            email:this.refs.email.value,
            phone:this.refs.phone.value,
            address:this.refs.address.value,
            longitude:this.props.coords.longitude,
            latitude:this.props.coords.latitude
        }
        console.log(user.longitude+'  '+user.latitude);
        // fetch("",{
        //     method: 'POST',
        //     headers:{
        //         'content-Type': 'application/json'
        //     },
        //     body:JSON.stringify(user)
        // })
        //     .then(res=>{
        //         if(res.ok) return res.json
        //     })
        //     .then(res =>{
        //         this.setState({redirectToListHome: true});
        //     })
        //     .catch(err=>{
        //         console.log(err);
        //     })
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 10000,
})(SignUp);