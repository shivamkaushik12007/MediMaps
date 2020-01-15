import React, {Component} from 'react';
import Logo from '../images/logo.svg';
import '../css/mediList.css';
import {Link} from 'react-router-dom';

class MediList extends Component{

    constructor(props){
        super(props);
        this.componentName="MediList";
        this.state={
            mediList:[],
            authenticated:false
        }
    }

    componentDidMount(){
        this.fetchMediList();
    }

    render(){
        return(
            <div>
                <div>
                    <div className="Bar"><img src={Logo} alt="logo" className="LogoList"/></div>
                    <div className="Bar Log"><Link to='/home'>LogOut</Link></div>
                </div>
                <div className="ColoumnOne">
                    <table className="table table-bordered">
                        <thead>
                            <tr className="ColoumnOne">
                                <th className="ColoumnTwo">Medicine</th>
                                <th className="ColoumnTwo">mg</th>
                                <th className="ColoumnTwo">Price</th>
                                <th className="ColoumnTwo">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="ColoumnTwo">
                                <td><input type="text" ref="medicine" className="Style"></input></td>
                                <td><input type="number" ref="mg" className="Style"></input></td>
                                <td><input type="number" ref="price" className="Style"></input></td>
                                <td><button className="btn btn-outline-dark mr-2" onClick={this.add}>Add</button></td>
                            </tr>
                            {this.state.mediList.map(medicine=>
                                <tr key={medicine._id} className="ForText">
                                    <td>{medicine.name}</td>
                                    <td>{medicine.mg}</td>
                                    <td>{medicine.price}</td>
                                    <td><button className="btn btn-outline-dark mr-2" onClick={()=>this.delete(medicine)}>Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    add=(event)=>{
        event.preventDefault();
        var med={
            name:this.refs.medicine.value,
            mg:this.refs.mg.value,
            price:this.refs.price.value,
            users:this.props.location.state.userName
        }
        console.log(JSON.stringify(med));

        fetch("http://localhost:8081/medicine/addMedicine",{
            method: 'POST',
            headers:{
                'content-Type': 'application/json'
            },
            body:JSON.stringify(med)
        })
            .then(res=>{
                if(res.ok) return res.json
            })
            .then(res =>{
                this.fetchMediList();
            })
            .catch(err=>{
                console.log(err);
            })
    }
    delete=(medicine)=>{
        // console.log(`Medicine to be delete is: ${JSON.stringify(medicine)}`)
        // console.log(this);
        fetch(`http://localhost:8081/mapp/deleteMedicine?id=${medicine._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.ok) {
                    console.log(`${medicine} is deleted`);
                    this.fetchMediList();
                }
            })
            .catch(error => {
                console.log(`The error is: ${error}`)
            })
    }

    fetchMediList=()=>{
        fetch(`http://localhost:8081/medicine?users=${this.props.location.state.userName}`,{
            methos:"GET",
            header:{
                "Content-Type":"application/json"
            }

        })   
            .then(res=>{
                return res.json()
            })
            .then(res=>{
                console.log(res);
                this.setState({mediList:res});
            })
            .catch(res=>{
                console.log(`The error is : ${JSON.stringify(res)}`)
            })
    }
}

export default MediList;