import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link, useHistory } from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap'

const Adduser = () => {
  const [name, setName] = useState('')
  const { users, addUser } = useContext(GlobalContext)
  const history = useHistory()

  const onSubmit = () => {
    const newUser = {
      id: users.length + 1,
      name,
    }
    addUser(newUser)
    history.push('/')
  }

  return (
    <React.Fragment>
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type='text' placeholder='Enter Name' />
            </FormGroup>
            <Button type='submit'>Add User</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
        </Form>
    </React.Fragment>
  )
}

export default Adduser
