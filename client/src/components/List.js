import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

const TrBlock = ({currElement}) => {
    const { title, url} = currElement;
    return (
        <tr>
            <td>{title}</td>
            <td>{url}</td>
            <td>Edit Delete</td>
        </tr>
    );
}

const List = () => {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        axios.get('/api/project-list')
        .then((res) => {
            // alert(res.data.projects[0].title);
            setProjects(res.data.projects);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    
    return (
        <div className="container mt-2">
            <div className="row">
                <h1 className="text-center my-2">Project List</h1>
                <Table bordered>
                    <thead>
                        <tr>
                        <th>Title</th>
                        <th>Url</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map((curr) => {
                                return <TrBlock currElement={curr} />;
                            })
                        }
                        
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default List;