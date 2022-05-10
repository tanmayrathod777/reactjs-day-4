import React , {useState} from "react";

function Statejs() {
    const [data , setData] = useState(0);

    function Updatedata() {
        setData(data ++)
    }

    return (
        <div>
            <h1>{data}</h1>
            <button onClick ={Updatedata}>click state</button>
        </div>
    )
}
export default Statejs;


// Q) state is public or private
// Q )  can i use state component out side of the state