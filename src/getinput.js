import React,{useState} from "react";

function Inputjs() {
    const [data , setData] = useState(null)
    const [print , setPrint] = useState(null)
    function getData(val){
        setData(val.target.value)
        console.warn(val.target.value)
    }
    return(
        <div>
            <h1>{data}</h1>
            <h2>get input</h2>
            <input type="text" onChange={getData} ></input>
            {/* <button onClick={setPrint(true)}>print value</button> */}
            {/* <h1>print ? {data} : null</h1> */}
        </div>
    )
}

export default Inputjs; 