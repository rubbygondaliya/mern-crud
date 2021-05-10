import React from 'react';
import { Table } from 'reactstrap';

const List = () => {
    return (
        <div className="container mt-2">
            <div className="row">
                <h1 className="text-center my-2">Project List</h1>
                <Table bordered>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Url</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default List;