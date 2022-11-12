import React from 'react';
import { Container, Form, Button } from "react-bootstrap";
import './Register.css'
import { useNavigate } from 'react-router-dom';
import MainNavbar from '../../components/MainNavbar';
import { useState, useEffect } from 'react';
import axios from "axios";

const Register = () => {

  const initialValues = { firstName: "", email:"", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const nav = useNavigate(null);


  const register = (userData) => {
        axios.post('http://localhost:5027/api/account/login', userData, {
            headers: {
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiIDAiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwiZXhwIjoxNjY5NTQ4NTYxLCJpc3MiOiJodHRwOi8vYm9va2luZ2FwaS5jb20iLCJhdWQiOiJodHRwOi8vYm9va2luZ2FwaS5jb20ifQ.fdY7vlUF3MI75OKqJ35-eE14ZVQ3Xj5w_ij_PUlx9FI"
            }
            })
            .then((res) => {
                nav("/login")
            })
            .catch((err) => alert(err.response.data))
    }

  const registerHandler = () => {
    const register_data = {
      "username": document.getElementById("username").value,
      "email": document.getElementById("email").value,
      "password": document.getElementById("password").value
    };
    register(register_data, document.getElementById("role").value)
    alert("Confirm your token!")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit){
      registerHandler();
    }
  },[formErrors])
  
  const validate = (values) => 
  {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if(!values.username)
    {
      errors.username = "Username is required!";
    }
    if(!values.email)
    {
      errors.email = "Email is required!";
    } else if(!regex.test(values.email))
    {
      errors.email = "This is not a valid email format!"
    }
    if(!values.password)
    {
      errors.password = "Password is required!";
    }
    return errors;
  }

  return (
   
    <Container id="main-container" className="text-center" >
      <MainNavbar />
      <Form id="sign-in-form" className="text-center p-5 w-100 rounded" >
       <font color="#5392f9">Get</font><font color="#ffffff ">Home.com</font>
        <h1 className="mb-4 fs-4 fw-bold"><font color="#e6e6e6">Create an account!</font></h1>
        <Form.Select id = "role" aria-label="Default select example" className="mb-3" >
          <option value="MANAGER">MANAGER</option>
          <option value="CLIENT">CLIENT</option>
        </Form.Select>
        <Form.Group className="mb-1">
          <Form.Control size="mid" placeholder="Username" className="position-relative" id="username" name = "username" value={formValues.username} onChange={handleChange} />
          <font color="#FF0000">{formErrors.username}</font>
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Control type="email" size="mid" placeholder="Email address" autoComplete="Email address" name = "email" className="position-relative" id="email" value={formValues.email} onChange={handleChange}/>
          <font color="#FF0000">{formErrors.email}</font>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control type="password" size="mid" placeholder="Password" autoComplete="current-password" name = "password" className="position-relative" id="password" value={formValues.password} onChange={handleChange} />
        <font color="#FF0000">{formErrors.password}</font>
        </Form.Group>
        <div className="d-grid">
          <Button className='buttonLogin' variant="primary" size="lg" onClick={handleSubmit}> <font color="white" ><strong>Sign up</strong></font></Button>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
