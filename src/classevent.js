import React, { Component } from 'react'
export default class ClickEventHandler extends Component{
    clickHandler() {
        console.log('you clicked button is class');
    }
    render() {
       
        return (
            <div>
                <button onclick={this.clickHandler}>click for class </button>
            </div>
        )
    }
}