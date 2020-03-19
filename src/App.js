import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

export default function App () {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(res =>
                res.data.map(item => ({
                    name: `${item.name}`,
                    username: `${item.username}`,
                    email: `${item.email}`
                }))
            )
            .then(data => {
                setUsers(data);
                setFilteredUsers(data);
            })
    }, []);

    const handleInputChange = (e) => {
      const input = e.target.value;
      const re = new RegExp(input, 'i');

      const filteredUsers = users.filter(item => {
          return re.test(item.name)
      });

      setFilteredUsers(filteredUsers)
    };

    const toggleList = () => {
        setShow(!show)
    };

    return (
        <div>
            <button onClick={toggleList}>
                Toggle Modal ▼
            </button>
            {show &&
            <div className="name">
                <h2>Search Component Using <code>Hooks</code></h2>
                <input type='text'
                       autoFocus
                       placeholder='Search...'
                       onChange={handleInputChange} />

                <ul>
                    {filteredUsers.map(user => (
                        <li key={user.name}
                            value={user.name} >
                            {user.name}
                        </li>
                    ))}
                </ul>
            </div>
            }
        </div>
    )
}