import React,{Component} from 'react';
import Logo from '../images/logo.svg';
import '../css/pharmaList.css';
import {Link} from 'react-router-dom';
class PharmaList extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     search:this.props.state.search
        // }
    }
    componentDidMount(){
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
                                <th className="Coloumn">Price</th>
                                <th className="Coloumn">Phone No.</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* <tr>
                                    <td className="TableData">hello</td>
                                    <td className="TableData">hello</td>
                                    <td className="TableData">hello</td>
                                    <td className="TableData">hello</td>
                                </tr> */}
                            {/* {map(book =>
                                <tr>
                                    <td className="TableData"></td>
                                    <td className="TableData"></td>
                                    <td className="TableData"></td>
                                    <td className="TableData"></td>
                                </tr>
                            )} */}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default PharmaList;