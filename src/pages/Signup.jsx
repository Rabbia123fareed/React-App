import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (e) => {
      e.preventDefault()
      Swal.fire({
        title: 'Signup!',
        text: 'Thanks for Login',
        icon: 'success',
        confirmButtonText: 'Continue'
      })
  }
  return (
    <div  className="d-flex justify-content-center align-items-center ">

<div>
    <img className='img-fluid' src="https://cdna.artstation.com/p/assets/images/images/027/682/158/original/liz-gross-signup.gif?1592246526" alt="" srcset="" />
    
</div>
<div className="container d-flex mt-5 ">
    <div className="childcontainer mt-3 ">
      
        <Form>
           
        <h1 className="text-primary"><strong>Signup</strong></h1>

            <Form.Group controlId="email">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                    type="email"
                />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                />
            </Form.Group>

            <Form.Group controlId="termsAgreed">
                <Form.Check
                    type="checkbox"
                    label="Rememberme"

                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Sign Up
            </Button>

            <p>
                Have an account? <Link to="/Login">Login</Link>
            </p>
        </Form>
  
    </div>

  </div>
    </div>
  

  )
}

export default Signup 