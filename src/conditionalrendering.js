import React from 'react'
import ReactDOM from 'react-dom/client'
import Information from './components/Form'
function Sample(props)
{
    var x=props.name
    if(x==='React'){
        return(<Information hi={x}/>)
    }
    
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Sample name="React"/>)
