import React , {Component} from "react";
export default class Welcome extends Component {
    constructor() {
        super()
            this.state = {
                message : 'Message Unknown To The Channel'
            
        }
    }
    changeMessage() {
        this.setState({
            message : 'Thank You For Shopping'
        })
    }
    render() {
        return (
            <div>
            <h1>{this.state.message} </h1>
            <button onClick={() => this.changeMessage()}>Click Here</button>
            </div>
        )
    }
}

// State in Class Method 