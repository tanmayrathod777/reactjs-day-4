import React from 'react'
import './index.css'
export default function Booklist() {
    return(
        <div className='Containe'>
            <Book name = "tanmay" />
            <Book name ="john"/>
            <Book name = "task" />
           
            <Imageis />
        </div>
    )
}

const Book =(props) =>{
    return <h1>this is {props.name}</h1>
}
const Imageis = () => {
    return <img src='./public/logo192.png' alt =''/>
}