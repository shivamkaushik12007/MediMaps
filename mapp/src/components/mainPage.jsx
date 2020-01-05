import React, {Component} from 'react';
import Intro from './intro'
import SignUp from './signUp'
import LogIn from './logIn'
import Home from './home'
import PharmaList from './pharmaList'
import { BrowserRouter as Router, Route, Switch, BrowserRouter} from 'react-router-dom';

class MainPage extends Component{
    componentDidMount(){
        console.log("Mainpage component is mounted");
    }
    
    render(){
        console.log("Mainpage component is rendered");

        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/" component={Intro} exact/>
                            <Route path="/home" component={Home}/>
                            <Route path="/logIn" component={LogIn}/>
                            <Route path="/signUp" component={SignUp}/>
                            <Route path="/pharmaList" component={PharmaList}/>
                            <Route component={Error}/>
                        </Switch>
                    </div> 
                </BrowserRouter>
            </div>
        )
    }
}

export default MainPage;


{/* <Router>
                    <Intro />
                    <div>
                        <Switch>
                            <Route exact path="/home" render={(props)=><Home />} />
                            <Route exact path="/logIn" render={(props)=><LogIn />} />
                            <Route exact path="/signUp" render={(props)=><SignUp />} />
                        </Switch>
                    </div>
</Router> */}