import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addContact } from "../Redux/Action";
import { useNavigate } from "react-router-dom"


const AddContact= ()=>{
const [name,setName] = useState('')
const [age,setAge] = useState('')
const [email,setEmail] = useState('')
const dispatch = useDispatch()
const navigate = useNavigate ()
const handleAdd = (e) => {
    e.preventDefault()
    dispatch(addContact({name,age,email},navigate))
}


    return(
      <header>
        <h2>Register your Contact :</h2>
        <br/>
        <div>
            <Form style={{ width: '20rem' }} bg="dark" data-bs-theme="dark">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter your name" />
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter your age" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>E-mail</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email" />
      </Form.Group>

      <Button onClick={(e)=> handleAdd(e)} variant="success" type="submit">
        Submit
      </Button>
    </Form>
    <br/>
    <br/>
    </div>
    </header>
        
    )
} 

export default AddContact