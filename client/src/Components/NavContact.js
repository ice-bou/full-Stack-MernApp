import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.svg';
const NavContact=()=>{

    return(

        <div>
             <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand as={Link} to={'/'} >
            <img
              alt=""
              src={logo}
              width="60"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React C.R.U.D
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to ="/">Home</Nav.Link>
            <Nav.Link as={Link} to ="/AddContact">Add Contact</Nav.Link>
            <Nav.Link as={Link} to ="/ListContact">Contacts List</Nav.Link>
            
          </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Omar Bouattay</a>
          </Navbar.Text>
          <NavDropdown id="basic-nav-dropdown" style={{color:"white", marginLeft:"6px"}}>
              <NavDropdown.Item as={Link} to={'/Profil'}>Profil</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/About'}>About </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    )
} 

export default NavContact