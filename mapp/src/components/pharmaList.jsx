import React,{Component} from 'react';
import Logo from '../images/logo.svg';
import '../css/pharmaList.css';
import {Link} from 'react-router-dom';
class PharmaList extends Component{
    constructor(props){
        super(props);
        this.state={
            mediList:[],
            pharmaList:[]
        }
    }
    componentDidMount(){
        this.fetchPharmaList();
        // console.log(this.props.location.state.medicine);
        // console.log(this.props.location.state.latitude);
        // console.log(this.props.location.state.longitude);
        // console.log(this.state.pharmaList);
    }
    render(){
        return(
            <div className="LogoName">
                <div>
                   <Link to='/home'><img src={Logo} alt="logo" className="LogoList"/></Link>
                </div>
                <div className="TableDiv">
                    {this.state.pharmaList.length===0?(<h1 className="Sorry">Sorry...We don't have anyone with this medicine!</h1>):
                <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="Coloumn">Pharmacist</th>
                                <th className="Coloumn">Medicine</th>
                                <th className="Coloumn">Adress</th>
                                <th className="Coloumn">Phone No.</th>
                                <th className="Coloumn">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pharmaList.map(list=>
                                <tr key={list.key}>
                                    <td className="TableData">{list.user[0].name}</td>
                                    <td className="TableData">{this.props.location.state.medicine}</td>
                                    <td className="TableData">{list.user[0].address}</td>
                                    <td className="TableData">{list.user[0].mobNumber}</td>
                                    <td className="TableData">{list.rate}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>}
                </div>
            </div>
        )
    }
    
    fetchPharmaList=()=>{
        fetch(`http://localhost:8081/medicine/findSearch?search=${this.props.location.state.medicine}`,{
            method: 'GET',
            headers:{
                'content-Type': 'application/json'
            }
        })
            .then(res=>{
                return res.json()
            })
            .then(res=>{
                // console.log(res);
                this.setState({mediList:res});
                this.state.mediList.forEach(medi=>{
                    this.getUserList(medi.users,medi.price,medi._id);
                })
                // this.setState({mediList:res});
            })
            .catch(res=>{
                console.log(`The error is : ${JSON.stringify(res)}`)
            })
    }

    getUserList=(user,price,unq)=>{
        fetch(`http://localhost:8081/users/findSearch?search=${user}`,{
            method:"GET",
            headers:{
                'content-Type': 'application/json'
            }
        })
            .then(res=>{
                if(res.ok) return res.json();
            })
            .then(res=>{
                // console.log(res);
                let a = this.state.pharmaList.slice(); 
                var k={
                    user:res,
                    rate:price,
                    key:unq
                }
                a.push(k);
                // console.log(res[0].latitude);
                // console.log(res[0].longitude);
                // console.log(this.props.location.state.latitude);
                // console.log(this.props.location.state.longitude);
                if(this.distance(res[0].latitude,res[0].longitude,
                    this.props.location.state.latitude,this.props.location.state.longitude)<10){
                        this.setState({pharmaList:a});
                    }
                
                // console.log(this.state.pharmaList);
            })
            .catch(res=>{
                console.log(`The error is : ${JSON.stringify(res)}`)
            })
    }

    distance(lat1,lon1,lat2,lon2) {
        var R = 6371;
        var dLat = (lat2-lat1) * Math.PI / 180;
        var dLon = (lon2-lon1) * Math.PI / 180;
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        // console.log(d);
        return Math.round(d);
    }

}

export default PharmaList;