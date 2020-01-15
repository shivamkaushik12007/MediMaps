import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import '../css/logIn.css';
import Logo from '../images/logo.svg';
import {Link} from 'react-router-dom';

class LogIn extends Component{
    constructor(){
        super();
        this.state={
            userName:"",
            redirectToMediList:false
        }
    }
    render(){
        if(this.state.redirectToMediList){
            return <Redirect to={{
                pathname:'/mediList',
                state:{
                    userName:this.state.userName
                }
            }}/>
        }
        return (
            <div>
                <div className="Main Left">
                    <div><Link to='/home'><img src={Logo} className="Logo"/></Link></div>
                    <div><h1 className="Head">Welcome to the MediMaps <br/>Pharmacist Area...</h1></div>
                </div>
                <div className="Main Right">
                    <div className="Inside">
                        <div className="Text">LogIn</div>
                        <form onSubmit={this._addUser}>
                            <div className="form">
                                <div className="form-group">
                                    <input type="text" placeholder="UserName" ref="userName" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="Password" ref="password" className="form-control "></input>
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
    _addUser=(event)=>{
        event.preventDefault();
        let user={
            userName:this.refs.userName.value,
            password:this.refs.password.value,
        }
        fetch("http://localhost:8081/users/login",{
            method: 'POST',
            headers:{
                'content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        })
            .then(res=>{
                if(res.ok){
                    this.setState({userName: this.refs.userName.value,redirectToMediList: true});
                    return res.json
                }
            })
            .catch(err=>{
                console.log(err);
            })
    } 
}

export default LogIn;