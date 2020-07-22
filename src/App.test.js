import React, { useContext } from 'react';
import { MemoryRouter } from 'react-router'
import Enzyme, { mount } from 'enzyme';
import UserList from './components/UserList'
import { GlobalProvider, GlobalContext } from './context/GlobalState'

import Adapter from 'enzyme-adapter-react-16';
import { Button } from 'reactstrap';

Enzyme.configure({adapter:new Adapter()});

const users = [
    {id: 1, name: 'one'}
]

describe('Users', () => {
    it('User Lists', () => {
        const wrapper = mount(
            <GlobalProvider users={users}>
                <MemoryRouter><UserList /></MemoryRouter>
            </GlobalProvider>
        );
        expect(wrapper.find("ListGroupItem").length).toBe(3)
    })
})

describe('Add users', () => {
    it('Adds new user', () => {
        function TestComponent() {
            const { users, addUser } = useContext(GlobalContext)
            const newUser = {id:5, name: 'Five'}
            return (
                <div data-testid="value">{users.length}
                    <Button onClick={() => addUser(newUser)}></Button>
                </div>
            )
        }

        const wrapper = mount(
            <GlobalProvider>
                <TestComponent />
            </GlobalProvider>
        )

        expect(wrapper.find('[data-testid="value"]').text()).toEqual('3')
        wrapper.find('button').simulate('click')
        expect(wrapper.find('[data-testid="value"]').text()).toEqual('4')
    })
})

describe('Delete user', () => {
    it('Delete user', () => {
        function TestComponent() {
            const { users, removeUser } = useContext(GlobalContext)
            const id = 1
            return (
                <div data-testid="value">{users.length}
                    <Button onClick={() => removeUser(id)}></Button>
                </div>
            )
        }

        const wrapper = mount(
            <GlobalProvider>
                <TestComponent />
            </GlobalProvider>
        )

        expect(wrapper.find('[data-testid="value"]').text()).toEqual('3')
        wrapper.find('button').simulate('click')
        expect(wrapper.find('[data-testid="value"]').text()).toEqual('2')
    })
})

describe('Edit user', () => {
    it('Edit user', () => {
        function TestComponent() {
            const { users, editUser } = useContext(GlobalContext)
            const editedUserId = 1
            const selectedUser = users.find(users => users.id === editedUserId)
            const editedValue = {
                id: 1, name: 'Test User'
            }
            return (
                <div data-testid="value">{selectedUser.name}
                    <Button onClick={() => editUser(editedValue)}></Button>
                </div>
            )
        }

        const wrapper = mount(
            <GlobalProvider>
                <TestComponent />
            </GlobalProvider>
        )

        expect(wrapper.find('[data-testid="value"]').text()).toEqual('User One')
        wrapper.find('button').simulate('click')
        expect(wrapper.find('[data-testid="value"]').text()).toEqual('Test User')
    })
})
