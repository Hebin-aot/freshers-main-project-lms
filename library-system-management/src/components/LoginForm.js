import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm({ Login }) {

    const [details, setDetails] = useState({email:"",password:"",})

    const submitHandler = (event) => {
        event.preventDefault();
        
        Login(details)
    }

    return (
        <div>
            <div className="container d-flex flex-column align-items-start p-5">
                <div className="d-flex align-items-center gap-2">
                    <img src="./images/LMSlogo.png" alt="" />
                    <p className="LMSlogo m-0">
                            LMS
                    </p>
                </div>
                <Form className="col-md-4 loginForm" onSubmit={submitHandler}>
                    <Form.Group className="col-md-12 mb-3 d-flex flex-column" controlId="formBasicEmail">
                        <Form.Label className="m-0 loginTitle">Login</Form.Label>
                        <Form.Text className="text welcomeText">
                            Welcome back! Please enter your details.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-12 mb-2 d-flex gap-5 admin-student-container" controlId="formBasicEmail">
                        <button className="admin-student-selection">Admin</button>
                        <button className="admin-student-selection">Student</button> 
                    </Form.Group>
                    <Form.Group className="col-md-12 mb-3" controlId="formBasicEmail">
                        <Form.Label className="mail-password-title">Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" onChange={e => setDetails({...details,email: e.target.value})} value={details.email}/>
                    </Form.Group>
                    <Form.Group className="col-md-12 mb-4" controlId="formBasicPassword">
                        <Form.Label className="mail-password-title">Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" onChange={e => setDetails({...details,password: e.target.value})} value={details.password}/>
                    </Form.Group>
                    <Button type="submit" className="col-md-12 loginButton py-2">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default LoginForm;
