import React, {useState} from 'react';

// Components
import {Users} from './components/Users/Users'

// Styles
import './App.css';

export default function App () {
    const [users, setUsers] = useState([]);

    return (
        <div>
            <Users users={users} setUsers={setUsers} />
        </div>
    )
}