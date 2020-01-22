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
            userName:"",
            redirectToMediList: false
        }
    }
    // async componentDidMount(){
    //     const response=await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=b03590ce4cee4f55a4a020c91b36b151");
    //     const data=await response.json();
    //     this.setState({longitude:data.longitude,latitude:data.latitude});
    //     console.log(data.latitude+" yesn "+data.longitude);
    // }
    render(){

        if(this.state.redirectToMediList){
            return <Redirect to={{
                pathname:'/mediList',
                state:{
                    userName:this.state.userName,
                    check:false
                }
            }}/>
        }

        return(
            <div className="MainTwo">
                <div>
                    <Link to='/home'><img src={Logo} alt='logo' className="LogoTwo"/></Link>
                </div>
                <div className="InsideTwo">
                    <form onSubmit={this._addUser}>
                        <div className="form" onSubmit={this._addUser}>
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
                            <div>
                                {this.state.check?(<p className="Error">This username or E-mail maybe already taken!</p>):(<p></p>)}
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
            mobNumber:this.refs.phone.value,
            eMail:this.refs.email.value,
            name:this.refs.name.value,
            address:this.refs.address.value,
            longitude:this.props.coords.longitude,
            latitude:this.props.coords.latitude
        }
        // console.log(user.longitude+'  '+user.latitude);
        fetch("http://localhost:8081/users/add",{
            method: 'POST',
            headers:{
                'content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        })
            .then(res=>{
                if(res.ok){
                    this.setState({userName:this.refs.userName.value,redirectToMediList: true});
                    return res.json;
                }
                    
            })
            .then(res=>{
                this.setState({check:true});
            })
            .catch(err=>{
                this.setState({check:true});
                // console.log(err);
            })
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 10000,
})(SignUp);