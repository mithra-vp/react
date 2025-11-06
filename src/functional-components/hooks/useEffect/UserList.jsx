import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(usr => (
                    <li key={usr.id}>
                        <h3>{usr.name}</h3>
                        <p>{usr.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList


// state manage cheyan aannu hooks
