import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOneContact, upOneContact } from "../Redux/Action";



const EditContact= ()=>{

const {id} = useParams()
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getOneContact(id))
},[])


const oneContact = useSelector(state => state.oneContact)

const [name,setName] = useState(oneContact.name)
const [age,setAge] = useState(oneContact.age)
const [email,setEmail] = useState(oneContact.email)

useEffect(()=>{
  setName(oneContact.name)
  setAge(oneContact.age)
  setEmail(oneContact.email)

},[oneContact])


const navigate = useNavigate()

const handleUpdate = (e)=> {
  
  e.preventDefault()
  dispatch(upOneContact(id,{name,age,email},navigate))
}
    return(
        <div>
            <Form style={{ width: '20rem' }} bg="dark" data-bs-theme="dark">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter your name" />
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter your age" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>E-mail</Form.Label>
        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email" />
      </Form.Group>

      <Button onClick={(e)=>handleUpdate(e)} variant="danger" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
} 

export default EditContact