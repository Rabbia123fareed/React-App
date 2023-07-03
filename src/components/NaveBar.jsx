import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




function NaveBar() {
  return (

    <>

 
<Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark"  >
      <Container>
     
      <Navbar.Brand herf="#home"><i><strong>E-commerces</strong></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <div className="d-flex align-items-center">
      <Link to="/" className='mx-3 text-decoration-none text-success'><i>Home</i></Link>
      <Link to="/Products" className='mx-3 text-decoration-none text-warning'><i>Products</i></Link>
      <Link to="/Login" className='mx-3 text-decoration-none btn btn-info'><i>Login</i></Link>
      <Link to="/Signup" className='mx-3 text-decoration-none btn btn-danger'><i>Sign up</i></Link>
    
    
      
        </div>

         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>

  );
}

export default NaveBar;