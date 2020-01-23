import React,{Component} from 'react';
import Logo from '../images/logo.svg';
import {Link} from 'react-router-dom';
class DocList extends Component{
    constructor(props){
        super(props);
        this.state={
            DocList:[]
        }
    }
    componentDidMount(){
        this.fetchDocList();
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
    
    // fetchDocmaList=()=>{
    //     fetch(`http://localhost:8081/doctor/findSearch?search=${this.props.location.state.medicine}`,{
    //         method: 'GET',
    //         headers:{
    //             'content-Type': 'application/json'
    //         }
    //     })
    //         .then(res=>{
    //             return res.json()
    //         })
    //         .then(res=>{
    //             // console.log(res);
    //             this.setState({mediList:res});
    //             this.state.mediList.forEach(medi=>{
    //                 this.getUserList(medi.users,medi.price,medi._id);
    //             })
    //             // this.setState({mediList:res});
    //         })
    //         .catch(res=>{
    //             console.log(`The error is : ${JSON.stringify(res)}`)
    //         })
    // }
}

export default DocList;