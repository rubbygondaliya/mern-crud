import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const RegisterForm = () => {

    const[formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        password:"",
        cpassword:"",
        work:"",
        description:"",
        profileImage:"",
        fresher:false,

    });

    const handleChangeEvent = (e) => {
        if(e.target.name === 'fresher'){
            setFormData({...formData, [e.target.name] : e.target.checked});
        }
        else{
            setFormData({...formData, [e.target.name] : e.target.value});
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <Form onSubmit={submitForm}>
                        <h1 className="text-center my-2">Registraion</h1>
                        
                        <div className="row">
                            <div className="col-6">
                                <FormGroup className="my-2">
                                    <Label className="my-2" for="firstName">First Name</Label>
                                    <Input onChange={handleChangeEvent} type="text" name="firstName" id="firstName" placeholder="First Name" />
                                </FormGroup>
                            </div>
                            <div className="col-6">
                                <FormGroup className="my-2" >
                                    <Label className="my-2" for="lastName">Last Name</Label>
                                    <Input onChange={handleChangeEvent} type="text" name="lastName" id="lastName" placeholder="Last Name" />
                                </FormGroup>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-6">
                                <FormGroup className="my-2">
                                    <Label className="my-2" for="email">Email</Label>
                                    <Input onChange={handleChangeEvent}  type="email" name="email" id="email" placeholder="Email" />
                                </FormGroup>
                            </div>
                            <div className="col-6">
                                <FormGroup className="my-2" >
                                    <Label className="my-2" for="phone">Phone</Label>
                                    <Input onChange={handleChangeEvent}  type="text" name="phone" id="phone" placeholder="Phone" />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <FormGroup className="my-2">
                                    <Label className="my-2" for="password">Password</Label>
                                    <Input onChange={handleChangeEvent}  type="password" name="password" id="password" placeholder="Password" />
                                </FormGroup>
                            </div>
                            <div className="col-6">
                                <FormGroup className="my-2" >
                                    <Label className="my-2" for="cpassword">Confirm Password</Label>
                                    <Input onChange={handleChangeEvent} type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <FormGroup className="my-2" >
                                    <Label className="my-2" for="work">Work</Label>
                                    <Input onChange={handleChangeEvent} type="select" name="work" id="work">
                                    <option value="webdeveloper">Web Developer</option>
                                    <option value="webdesigner">Web Designer</option>
                                    <option value="seo">Seo</option>
                                    <option value="qa">Qa</option>
                                    </Input>
                                </FormGroup>
                            </div>
                            <div className="col-6">
                                <FormGroup className="my-2" >
                                    <Label className="my-2" for="profileImage">Profile Image</Label>
                                    <Input onChange={handleChangeEvent} className="form-control" type="file" name="profileImage" id="profileImage" />
                                </FormGroup>
                            </div>
                        </div>
                        
                        <div className="row">
                            <FormGroup className="my-2" >
                                <Label className="my-2" for="description">Description</Label>
                                <Input onChange={handleChangeEvent} type="textarea" name="description" id="description" />
                            </FormGroup>
                        </div>

                        <div className="row my-2">
                            <div className="col-6">
                                <FormGroup className="my-2" check>
                                    <Label className="my-2" check>
                                    <Input onChange={handleChangeEvent} type="checkbox" name="fresher" id="fresher"/>
                                    Fresher
                                    </Label>
                                </FormGroup>
                            </div>
                            <div className="col-6">
                                <Button type="submit" color="primary">Register</Button>
                            </div>
                        </div>

                        
                        
                    </Form>
                </div>
            </div>
        </>
    );
};

export default RegisterForm;