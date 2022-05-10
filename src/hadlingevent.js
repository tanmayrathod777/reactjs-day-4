import React from "react";

export default function HandelEvent() {
     function FunClick(){
        console.log('you clicked');
    }
    return(
        <div>
            <button onClick={FunClick}>Click</button>
        </div>
    )
}