import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Project = () => {
    
    const history = useHistory();
    
    const [formData, setFormData] = useState({
        title:"",
        url:"",
        description:""
    });

    const handleChangeEvent = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const submitForm = (e) => {
        e.preventDefault();
        
        axios.post('/api/add-project', formData)
        .then((res) => {
            alert("Project added successfully.");
            history.push("/project-list");
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <Form onSubmit={submitForm}>
                        <h1 className="text-center my-2">Project Description</h1>
                        
                        <div className="row">
                            <div className="col-6">
                                <FormGroup className="my-2">
                                    <Label className="my-2" for="title">Project Title</Label>
                                    <Input onChange={handleChangeEvent} type="text" name="title" id="title" placeholder="Project Title" />
                                </FormGroup>
                            </div>
                            <div className="col-6">
                                <FormGroup className="my-2" >
                                    <Label className="my-2" for="url">Url</Label>
                                    <Input onChange={handleChangeEvent} type="text" name="url" id="url" placeholder="Url" />
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
                            <div className="col-5"></div>
                            <div className="col-2">
                                <Button type="submit" color="primary">Add Project</Button>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Project;