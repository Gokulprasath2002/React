import React,{useState} from 'react'
function Display()
{
    const[initial,current]=useState("")
    return(
            <div>
                <h1>{initial}</h1>
                <input id="name"/>
                <button onClick={()=>{
                    var x=document.getElementById("name").value;
                    current("Hi"+x)
                }}>Submit</button>
            </div>
    )
}
export default Display;