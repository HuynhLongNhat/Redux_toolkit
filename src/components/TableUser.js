import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUser } from "../action/actions"
const TableUser = () => {



    const dispatch = useDispatch()
    const listUser = useSelector((state) => state.user.listUser)
    const isLoading = useSelector((state) => state.user.isLoading)
    const isError = useSelector((state) => state.user.isError)
    useEffect(() => {
        dispatch(fetchAllUser())
    }, [])

    const handleDeleteUser = (user) => {
        console.log(user)
    }
    if (isError === false && isLoading === true) {
        return (
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
                        <div> Loading data...</div>
                    </tbody>
                </Table>
            </Container>
        )
    }
    if (isError === true && isLoading === false) {
        return (
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
                        <div>Something wrong, please try again...</div>
                    </tbody>
                </Table>
            </Container>
        )
    }
    if (isError === false && isLoading === false) {
        return (
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
                        <> {listUser && listUser.length > 0 && listUser.map((item, index) => {
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
                        })}</>

                    </tbody>
                </Table>
            </Container>
        )
    }
    // return (<>
    //     <Container>
    //         <hr></hr>
    //         <Table striped bordered hover>
    //             <thead>
    //                 <tr>
    //                     <th>#</th>
    //                     <th>Email</th>
    //                     <th>User name</th>
    //                     <th>Actions</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {isError === true ? <>
    //                     <div>Something wrong, please try again...</div>
    //                 </> :
    //                     <>
    //                         {isLoading === true ? <>Loading data...</> :
    //                             <> {listUser && listUser.length > 0 && listUser.map((item, index) => {
    //                                 return (
    //                                     <tr key={`user-${index}`}>
    //                                         <td>{index + 1}</td>
    //                                         <td>{item.email}</td>
    //                                         <td>{item.username}</td>
    //                                         <td>
    //                                             <button onClick={(item) => handleDeleteUser(item)} className='btn btn-danger mx-3'>Delete</button>
    //                                             <button className='btn btn-warning'>Edit</button>
    //                                         </td>
    //                                     </tr>
    //                                 )
    //                             })}</>}

    //                     </>
    //                 }

    //             </tbody>
    //         </Table>
    //     </Container>
    // </>);
}

export default TableUser;