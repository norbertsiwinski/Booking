import "./Login.css";
import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import MainNavbar from '../../components/MainNavbar';
import { useState, useEffect } from 'react';
import axios from "axios";
import { setItemToLocalStorage } from "../../helpers/localstorage";
import jwt_decode from "jwt-decode";

const Login = () => {
    const initialValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const nav = useNavigate(null);

    const login = (userData) => {
        axios.post('http://localhost:5027/api/account/login', userData, {
            headers: {
            }
        })
            .then((res) => {
                console.log(res)
                setItemToLocalStorage("authenticationToken", res.data)
                setItemToLocalStorage("name", jwt_decode(res.data).name)
                setItemToLocalStorage("role", jwt_decode(res.data).role)
                nav("/")
            })
            .catch((err) => alert(err.response.data))
    }

    const loginHandler = () => {
        const login_data = {
            "email": document.getElementById("username").value,
            "password": document.getElementById("password").value
        };
        login(login_data)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            loginHandler();
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {};

        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }
        return errors;
    }



    return (
        <div>
            <MainNavbar />
            <Container id="main-container" className="maincon">

                <Form id="sign-in-form2" className="text-center p-5 w-100 rounded">
                    <font color="#5392f9">Get</font><font color="#ffffff ">Home.com</font>
                    <h1 className="mb-4 fs-4 fw-bold"><font color="#e6e6e6">Log in to your account!</font></h1>
                    <Form.Group className='mb-1'>
                        <Form.Control size="mid" placeholder="Username" className="position-relative" id="username" name="username" value={formValues.username} onChange={handleChange} />
                        <font color="#FF0000">{formErrors.username}</font>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="password" size="mid" placeholder="Password" autoComplete="current-password" className="position-relative" id="password" name="password" value={formValues.password} onChange={handleChange} />
                        <font color="#FF0000">{formErrors.password}</font>
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center mb-3">
                        <Form.Check label="Remember me" className='label' />
                    </Form.Group>
                    <div className="d-grid">
                        <Button className='buttonLogink' variant="primary" size="lg" onClick={handleSubmit}><font color="white" ><strong>Log in</strong></font></Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
};

export default Login