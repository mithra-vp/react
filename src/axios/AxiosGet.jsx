import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosGet = () => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        const fecthUser = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (error) {
                console.error("Error", error);
                
            }
        }
        fecthUser();
    },[])

  return (
    <div>
      <h2>User list</h2>
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default AxiosGet
