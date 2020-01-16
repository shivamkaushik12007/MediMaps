import React, {Component} from 'react';
import Intro from './intro'
import SignUp from './signUp'
import LogIn from './logIn'
import Home from './home'
import PharmaList from './pharmaList'
import MediList from './mediList'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class MainPage extends Component{
    // componentDidMount(){
    //     console.log("Mainpage component is mounted");
    // }
    
    render(){
        // console.log("Mainpage component is rendered");

        return(
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/" component={Intro} exact/>
                            <Route path="/home" component={Home}/>
                            <Route path="/logIn" component={LogIn}/>
                            <Route path="/signUp" component={SignUp}/>
                            <Route path="/pharmaList" component={PharmaList}/>
                            <Route path="/mediList" component={MediList}/>
                            <Route component={Error}/>
                        </Switch>
                    </div> 
                </Router>
            </div>
        )
    }
}

export default MainPage;
