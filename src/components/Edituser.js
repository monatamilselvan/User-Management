import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link, useHistory } from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap'

const Adduser = props => {
  const [name, setName] = useState('')
  const { users, editUser } = useContext(GlobalContext)
  const history = useHistory()
  const userId = parseInt(props.match.params.id)

  useEffect(() => {
    const setUser = async () => {
      const selectedUser = users.find(users => users.id === userId)
      setName(selectedUser.name)
    };
    setUser()
  }, [users, userId])

  const onSubmit = () => {
    const newUser = {
      id: userId,
      name,
    }
    editUser(newUser)
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
            <Button type='submit'>Edit User</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
        </Form>
    </React.Fragment>
  )
}

export default Adduser
