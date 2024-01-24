import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllcontacts } from "../Redux/Action"
import CardContact from "./CardContact"

const ListContact=()=>{
const dispatch = useDispatch()
    
useEffect(()=>{

    dispatch(getAllcontacts())
},[dispatch])

    const contacts = useSelector(state=>state.contacts)
    return(
        <header>
            <h2>Contact List Registered:</h2>
            <br/>
        <div className="hajja">
            {
            contacts.map((el,i,t)=> <CardContact el={el}/>)
            }
        </div>
        </header>
    )
} 

export default ListContact