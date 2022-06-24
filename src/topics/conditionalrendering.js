import Information from '../components/Form'
function Sample(props)
{
    var x=props.name
    if(x==='ReactJS'){
        return(<Information hi={x}/>)
    }
}
export default Sample