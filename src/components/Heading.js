import React from 'react'
import { Link } from 'react-router-dom'
import {
    NavItem,
    Nav,
    Navbar,
    NavbarBrand,
    Container
} from 'reactstrap'

const Heading = () => {
  return (
    <React.Fragment>
        <Navbar color='dark' dark>
            <Container>
                <NavbarBrand href='/'>My Team</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link to='/add' className='btn btn-primary'>Add User</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    </React.Fragment>
  )
}

export default Heading
