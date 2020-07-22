import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import {
    ListGroup,
    ListGroupItem,
    Button,
} from 'reactstrap'
import Pagination from '../components/Pagination'

const UserList = () => {
    const { users, removeUser } = useContext(GlobalContext)
    const [page, setPage] = useState(0)
    const rowsPerPage = 5

    const handlePageChange = value => {
        setPage(value)
    }

    return (
        <React.Fragment>
            <ListGroup data-testid="list-group" className='mt-4'>
                {users.length > 0 ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(res => <ListGroupItem key={res.id} className='d-flex'>
                    <strong>{res.name}</strong>
                    <div className='ml-auto'>
                        <Link to={`/edit/${res.id}`} className='btn btn-warning mr-1'>Edit</Link>
                        <Button
                          onClick={() => removeUser(res.id)}
                          color='danger'>Delete</Button>
                    </div>
                </ListGroupItem>
                ) : <b>No User Found</b>}
            </ListGroup>
            {users.length > 5 && <Pagination
              page={page}
              handlePageChange={value => handlePageChange(value)} />}
        </React.Fragment>
    )
}

export default UserList
