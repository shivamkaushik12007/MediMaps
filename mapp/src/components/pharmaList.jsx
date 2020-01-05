import React,{Component} from 'react'
class PharmaList extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     search:this.props.state.search
        // }
    }
    componentDidMount(){
        console.log(this.props.location.state.medicine);
    }
    render(){
        return(
            <div>
                <div>

                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default PharmaList;