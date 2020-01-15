import React,{Component} from 'react';
import Logo from '../images/logo.svg';
import '../css/pharmaList.css';
import {Link} from 'react-router-dom';
class PharmaList extends Component{
    constructor(props){
        super(props);
        this.state={
            pharmaList:[]
        }
    }
    componentDidMount(){
        this.fetchPharmaList();
        console.log(this.props.location.state.medicine);
        console.log(this.props.location.state.latitude);
        console.log(this.props.location.state.longitude);
    }
    render(){
        return(
            <div className="LogoName">
                <div>
                   <Link to='/home'><img src={Logo} alt="logo" className="LogoList"/></Link>
                </div>
                <div className="TableDiv">
                <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="Coloumn">Pharmacist</th>
                                <th className="Coloumn">Medicine</th>
                                <th className="Coloumn">Adress</th>
                                <th className="Coloumn">Phone No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pharmaList.Map(List=>
                                <tr>
                                    <td className="TableData">{List.name}</td>
                                    <td className="TableData">{this.props.location.state.medicine}</td>
                                    <td className="TableData">{List.address}</td>
                                    <td className="TableData">{List.mobNumber}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    
    fetchPharmaList=(event)=>{
        event.preventDefault();
        let user={
            search:this.props.location.state.medicine
        }
        fetch("http://localhost:8080/search",{
            method: 'GET',
            headers:{
                'content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        })
            .then(res=>{
                return res.json()
            })
            .then(res=>{
                console.log(res);
                this.setState({PharmaList:res});
            })
            .catch(res=>{
                console.log(`The error is : ${JSON.stringify(res)}`)
            })
    }
}

export default PharmaList;