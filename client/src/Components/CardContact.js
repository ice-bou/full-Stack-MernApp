import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../Redux/Action';
import  Button  from 'react-bootstrap/Button';


const CardContact=({el})=>{
const dispatch=useDispatch()
    return(

             <Card style={{ width: '22rem' }} bg="dark" data-bs-theme="dark" >
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.age}</Card.Subtitle>
        <Card.Text>
         {el.email}
        </Card.Text>
        <Card.Link as={Link} to={`/EditContact/${el._id}`} variant="danger" >Edit</Card.Link>
        <br/>
        <Button variant='danger' onClick={()=>dispatch(deleteContact(el._id))}>Delete</Button>
      </Card.Body>
    </Card>
    
    )
} 

export default CardContact