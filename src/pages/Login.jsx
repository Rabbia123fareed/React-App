
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Login!',
      text: 'Thanks for Login',
      icon: 'success',
      confirmButtonText: 'Continue'
    })
  };
  
  return (
    <div  className="d-flex justify-content-center align-items-center ">
      <div>
    <img className='img-fluid' src="https://cdn.dribbble.com/users/1172503/screenshots/4505740/login-form.gif" alt="" srcset="" />
    
</div>


    <Form onSubmit={handleSubmit} className='m-5'>
    <h1 className="text-primary"><strong>Login</strong></h1>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>

        <p>
          Create an account? <Link to="/signup">Signup</Link>
        </p>
      </Form>
    </div>
  
  )
}

export default Login