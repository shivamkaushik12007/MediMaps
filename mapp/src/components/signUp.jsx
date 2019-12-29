import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class SignUp extends Component{
    render(){
        return(
            <div>
                <form>
                    <div className="form form-row">
                        <div className="form-group col-md-6">
                            <label>UserName</label>
                            <input type="text" ref="userName" className="form-control"></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Password</label>
                            <input type="password" ref="password" className="form-control"></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Name</label>
                            <input type="text" ref="name" className="form-control"></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input type="email" ref="email" className="form-control"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;