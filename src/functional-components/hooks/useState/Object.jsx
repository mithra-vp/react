import React from 'react'
import { useState } from 'react'

const Object = () => {
    const [profile,setProfile] = useState({name: '', age: ''});

    const handleChange = (e) => {
        const { name,value} = e.target;
        setProfile({...profile,[name]: value });
    };
  return (
    <div>
      <input name="name" onChange={handleChange} placeholder="Name" /> <input name="age" onChange={handleChange} placeholder="Age" /> <p>{profile.name} is {profile.age} years old.</p>
    </div>
  )
}

export default Object
