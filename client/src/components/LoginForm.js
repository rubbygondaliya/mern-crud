import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForm = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        email:"",
        password:""
    });

    const handleChangeEvent = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    const submitForm = (e) => {
        e.preventDefault();
        history.push("/add-project");
        console.log(formData);
    }

    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <Form onSubmit={submitForm}>
                        <h1 className="text-center my-2">Login</h1>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <FormGroup className="my-2">
                                    <Label className="my-2" for="email">Email</Label>
                                    <Input onChange={handleChangeEvent} type="email" name="email" id="email" placeholder="Email" />
                                </FormGroup>
                            </div>
                            <div className="col-3"></div>
                        </div>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <FormGroup className="my-2" >
                                    <Label className="my-2" for="password">Password</Label>
                                    <Input onChange={handleChangeEvent} type="password" name="password" id="password" placeholder="Password" />
                                </FormGroup>
                            </div>
                            <div className="col-3"></div>
                        </div>
                        
                        <div className="row my-2">
                            <div className="col-3"></div>
                            <div className="col-3">
                                <Button type="submit" color="primary">Login</Button>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default LoginForm;