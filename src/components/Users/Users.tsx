import React, {useEffect, useState} from 'react'
import axios from 'axios'

// Types
import {UsersType} from './Users.types'

// Utils
import {toggleList , handleInputChange} from './Users.helpers'

interface Props {
    users: UsersType[]
    setUsers: any
}

export const Users = (props: Props) => {
    const {users, setUsers} = props;
    const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

    const [show, setShow] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        (async () => {
           try {
            const {data} = await axios.get(USERS_URL);
               setUsers(data);
               setFilteredUsers(data);
           } catch (error) {
               throw new Error(`Unhandled request, ${error}`)
           }
        })()
    }, []);

    return (
        <>
            <button onClick={() => toggleList(show, setShow)}>
                Toggle Modal ▼
            </button>

            {show &&
            <div className="name">
                <h2>Search Component Using <code>Hooks</code></h2>
                <input type='text'
                       autoFocus
                       placeholder='Search...'
                       onChange={(e) => handleInputChange(e, users, setFilteredUsers)} />

                <ul>
                    {filteredUsers.map((user: UsersType) => (
                        <li key={user.name}
                            value={user.name} >
                            {user.name}
                        </li>
                    ))}
                </ul>
            </div>
            }
            </>
    )
};


