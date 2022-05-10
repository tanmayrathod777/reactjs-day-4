import React, { Component } from "react";
export default class Greet extends Component {
    constructor(props) {
        super(props)

        this.state ={
            isLoggedIn : false
        }
    }
    render() {

    //     // if else method
    //    if(this.state.isLoggedIn) {
    //        return(
    //            <div>
    //                welcome User
    //            </div>
    //        )
    //    }else {
    //        return(
    //            <div>
    //                welcome Guest
    //            </div>
    //        )
    //    }
    // // conditional rendering

  // return (
  //     this.state.isLoggedIn ? <div>welcome user</div> : <div>welcome guest</div>
  // )
        
  // short Circuit aproach
  return this.state.isLoggedIn && <div>welcome Guest</div>
    }
}