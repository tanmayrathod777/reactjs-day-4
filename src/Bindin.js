import React ,{ Component } from "react";

export default class Construct extends Component{
    constructor(props) {
        super(props) ;
        this.handleClick = this.handleClick.bind(this) ;
    }
    handleClick() {
        console.log('btn clicked');
    }
    render() {
        return <button onClick= "{this.handleClick}"> click me</button>
    }
}