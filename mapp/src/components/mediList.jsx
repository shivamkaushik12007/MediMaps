import React, {Component} from 'react';
import Logo from '../images/logo.svg';
import '../css/mediList.css';
import {Link} from 'react-router-dom';

class MediList extends Component{
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
                            <tr className="ForText">
                                <td>paracetaamole</td>
                                <td>500</td>
                                <td>20</td>
                                <td><button className="btn btn-outline-dark mr-2" onClick={this.delete}>Delete</button></td>
                            </tr>
                            {/* {this.props.bookList.map(book =>
                                <tr key={book.id}>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.version}</td>
                                    <td>
                                        <button className="btn btn-outline-dark mr-2" onClick={() => this.sendSelectedBook(book)}><Link to='/edit'>Edit</Link></button>
                                        <button className="btn btn-outline-dark ml-2" onClick={() => this.props.deleteBook(book)}>Delete</button>
                                    </td>
                                </tr>
                            )} */}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    add=(event)=>{
        var med={
            name:this.refs.medicine.value,
            mg:this.refs.mg.value,
            price:this.refs.price.value
        }
    }
    delete(){
        
    }
}

export default MediList;