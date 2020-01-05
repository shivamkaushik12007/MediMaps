import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import '../css/home.css'
import Logo from '../images/logo.svg';
class Home extends Component{
    constructor(){
        super();
        this.state={
            search:"",
            redirectToPharmalist:false
        }
    }
    render(){
        if(this.state.redirectToPharmalist){
            return <Redirect to={{
                pathname:'/pharmaList',
                state:{medicine:this.state.search}
            }}/>
        }
        return(
            <div className="MainThree">
                <div className="LogoDivThree">
                    <img src={Logo} className="LogoThree"/>
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
            redirectToPharmalist:true
        })
    }
}

export default Home;