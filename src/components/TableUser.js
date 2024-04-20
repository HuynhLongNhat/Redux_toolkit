import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUser } from "../action/actions"
const TableUser = () => {
    const dispatch = useDispatch()
    const listUser = useSelector((state) => state.user.listUser)
    useEffect(() => {
        dispatch(fetchAllUser())
    }, [])

    const handleDeleteUser = (user) => {
        console.log(user)
    }
    return (<>
        <Container>

            <hr></hr>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>User name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 && listUser.map((item, index) => {
                        return (
                            <tr key={`user-${index}`}>
                                <td>{index + 1}</td>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                <td>
                                    <button onClick={(item) => handleDeleteUser(item)} className='btn btn-danger mx-3'>Delete</button>
                                    <button className='btn btn-warning'>Edit</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </Container>
    </>);
}

export default TableUser;